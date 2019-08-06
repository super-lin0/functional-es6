import { Container, MayBe, arrayUtils, Either } from "../lib/es6-functional.js";

const { Some, Nothing } = Either;

let testValue = new Container(3);
console.log(testValue);

console.log(new Container({ a: 1 }));

console.log(Container.of(3));
console.log(Container.of("String"));
console.log(Container.of({ a: 3 }));
console.log(Container.of(Container.of("12")));

let double = x => x * 2;

console.log(Container.of(3).map(double));

console.log("======Maybe===========");

console.log(MayBe.of("string").map(x => x.toUpperCase()));
console.log(MayBe.of(undefined).map(x => console.log(x)));
console.log(
  MayBe.of("George")
    .map(x => x.toUpperCase())
    .map(x => `Mr. ${x}`)
);
console.log(
  MayBe.of("George")
    .map(x => undefined)
    .map(x => `Mr. ${x}`)
);

const response = {
  data: {
    children: [
      {
        data: {
          url: "xxx1",
          title: "testa"
        }
      },
      {
        data: {
          url: "xxx2",
          title: "testb"
        }
      }
    ]
  }
};

let getTopTenSubRedditPosts = () => {
  let res;
  try {
    res = response;
  } catch (err) {
    res = { message: "Somthing went wrong", errorCode: err["statusCode"] };
  }

  return res;
};
const getTopTenSubRedditData = () => {
  let response = getTopTenSubRedditPosts();
  return MayBe.of(response)
    .map(arr => arr["data"])
    .map(arr => arr["children"])
    .map(arr =>
      arrayUtils.map(arr, ({ data: { url, title } }) => ({ url, title }))
    );
};

console.log(getTopTenSubRedditData());
console.log("======Maybe===========");

console.log("========Either===========");

let getTopTenSubRedditPostsEither = () => {
  let res;
  try {
    res = Some.of(response);
  } catch (e) {
    res = Nothing.of({
      message: "Somthing went wrong",
      errorCode: e["statusCode"]
    });
  }
  return res;
};
let getTopTenSubRedditDataEither = () => {
  let response = getTopTenSubRedditPostsEither();
  return response
    .map(arr => arr["data"])
    .map(arr => arr["children"])
    .map(arr =>
      arrayUtils.map(arr, ({ data: { url, title } }) => ({ url, title }))
    );
};

console.log(getTopTenSubRedditDataEither());
console.log("========Either===========");
