import { MayBe, arrayUtils } from "../lib/es6-functional.js";

let redditData = {
  kind: "Listing",
  data: {
    facets: {},
    modhash: "",
    children: [
      {
        kind: "t3",
        data: {
          url: "xxx1",
          permalink: "/r/compsce/2",
          title: "testa"
        }
      },
      {
        data: {
          url: "xxx2",
          permalink: "/r/compsce/1",
          title: "testb"
        }
      }
    ]
  }
};

let commentsData = [
  {
    kind: "Listing",
    data: { modhash: "", children: [], after: null, before: null }
  },
  {
    kind: "Listing",
    data: { modhash: "", children: [], after: null, before: null }
  }
];

let searchReddits = search => {
  let res;

  try {
    res = JSON.parse(JSON.stringify(redditData));
  } catch (ex) {
    res = { message: "Somthing went wrong", errorCode: ex["statusCode"] };
  }

  return res;
};

// console.log(searchReddits());

let searchComments = link => {
  let response;

  try {
    response = JSON.parse(JSON.stringify(commentsData));
  } catch (e) {
    response = { message: "Somthing wnet wrong", errorCode: e["statusCode"] };
  }
  return response;
};

// console.log("searchComments", searchComments());

const identify = x => {
  console.log("identify", x);
  return x;
};

let mergeViaMayBe = () => {
  let redditMayBe = MayBe.of(searchReddits());
  return redditMayBe
    .map(arr => arr["data"])
    .map(arr => arr["children"])
    .map(arr =>
      arrayUtils.map(arr, ({ data: { title, permalink } }) => ({
        title,
        permalink
      }))
    )
    .map(identify)
    .map(arr =>
      arrayUtils.map(arr, ({ title, permalink }) => ({
        title,
        comments: MayBe.of(searchComments())
      }))
    )
    .map(identify);
};

let answer = mergeViaMayBe();
console.log(answer);

let joinExample = MayBe.of(MayBe.of(5));
console.log(joinExample);
console.log(joinExample.join());

let mergeViaJoin = () => {
  let redditMayBe = MayBe.of(searchReddits());
  return redditMayBe
    .map(arr => arr["data"])
    .map(arr => arr["children"])
    .map(arr =>
      arrayUtils.map(arr, ({ data: { permalink, title } }) => ({
        title,
        permalink
      }))
    )
    .map(identify)
    .map(arr =>
      arrayUtils.map(arr, ({ title }) => ({
        title,
        comments: MayBe.of(searchComments()).join()
      }))
    )
    .map(identify)
    .join();
};

console.log("mergeViaJoin", mergeViaJoin());

let mergeViaChain = () => {
  let redditMayBe = MayBe.of(searchReddits());
  return redditMayBe
    .map(obj => obj["data"])
    .map(obj => obj["children"])
    .map(arr =>
      arrayUtils.map(arr, ({ data: { title, permalink } }) => ({
        title,
        permalink
      }))
    )
    .map(identify)
    .chain(arr =>
      arrayUtils.map(arr, ({ title }) => ({
        title,
        comments: MayBe.of(searchComments()).join(),
        commentsNum: MayBe.of(searchComments()).chain(
          comments => comments.length
        )
      }))
    );
};

console.log("mergeViaChain", mergeViaChain());
