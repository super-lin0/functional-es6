// const fetch = require("node-fetch");
let https = require("https");

function httpGetAsync(url, callback) {
  return https.get(url, response => {
    let body = "";
    response.on("data", d => (body += d));
    response.on("end", () => {
      let parsed = JSON.parse(body);
      callback(parsed);
    });
  });
}

httpGetAsync("./datas/search.json", data => console.log(data));

httpGetAsync("./datas/search.json", reddits =>
  httpGetAsync("./datas/comments.json", comments =>
    console.log("comments", comments)
  )
);

let generator;
function request(url) {
  httpGetAsync(url, response => generator.next(response));
}

function* main() {
  let redditJSON = yield request("./datas/search.json");
  let commentsJSON = yield request("./datas/comments.json");

  console.log("redditJSON", redditJSON);
  console.log("commentsJSON", commentsJSON);
}

generator = main();

generator.next();
