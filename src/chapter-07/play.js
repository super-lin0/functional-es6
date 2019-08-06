import { arrayUtils, partial, compose } from "../lib/es6-functional.js";

const { map, filter } = arrayUtils;

let apressBooks = [
  {
    id: 111,
    title: "C# 6.0",
    author: "ANDREW TROELSEN",
    rating: [4.7],
    reviews: [{ good: 4, excellent: 12 }]
  },
  {
    id: 222,
    title: "Efficient Learning Machines",
    author: "Rahul Khanna",
    rating: [4.5],
    reviews: []
  },
  {
    id: 333,
    title: "Pro AngularJS",
    author: "Adam Freeman",
    rating: [4.0],
    reviews: []
  },
  {
    id: 444,
    title: "Pro ASP.NET",
    author: "Adam Freeman",
    rating: [4.2],
    reviews: [{ good: 14, excellent: 12 }]
  }
];

const mapAndFilterBook = map(
  filter(apressBooks, book => book.rating && book.rating[0] > 4.5),
  book => ({
    title: book.title,
    author: book.author
  })
);

console.log("mapAndFilterBook", mapAndFilterBook);

const pickBookByRate = book => book.rating && book.rating[0] > 4.5;
const pickBookByAttr = book => ({ title: book.title, author: book.author });
const partialMap = partial(map, undefined, pickBookByAttr);
const partialFilter = partial(filter, undefined, pickBookByRate);
const composeBook = compose(
  partialMap,
  partialFilter
);

console.log(composeBook(apressBooks));
