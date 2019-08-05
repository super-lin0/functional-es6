import { arrayUtils } from "../lib/es6-functional";

const { map, filter, concatAll, reduce, zip } = arrayUtils;

const array = [1, 2, 3, 4];
const result = map(array, item => item * 2);
console.log(result);

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

const booksWithMap = map(apressBooks, book => ({
  title: book.title,
  author: book.author
}));

const bookWithFilter = filter(
  apressBooks,
  book => book.author === "Adam Freeman"
);

console.log(booksWithMap);
console.log("bookWithFilter:", bookWithFilter);

// 获取含有title和author对象且评级高于4.5的对象
const bookWithMapAndSome = map(
  filter(apressBooks, book => book.rating[0] > 4.5),
  book => ({
    title: book.title,
    author: book.author
  })
);

console.log("bookWithMapAndSome", bookWithMapAndSome);

//modified data structure.
let apressBooks2 = [
  {
    name: "beginners",
    bookDetails: [
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
      }
    ]
  },
  {
    name: "pro",
    bookDetails: [
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
    ]
  }
];
const booksConcatAll = filter(
  concatAll(map(apressBooks2, book => book.bookDetails)),
  book => book.rating > 4.5
);

console.log("booksConcatAll", booksConcatAll);

console.log(
  "reduce add:",
  reduce([1, 3, 4], (result, number) => (result += number))
);

console.log(
  "reduce *",
  reduce([1, 2, 3], (result, number) => (result *= number), 5)
);

const mixReduce = reduce(
  concatAll(map(apressBooks2, book => book.bookDetails)),
  ({ good, excellent }, book) => {
    let goodReviews =
      (book.reviews && book.reviews[0] && book.reviews[0].good) || 0;
    let excellentReviews =
      (book.reviews && book.reviews[0] && book.reviews[0].excellent) || 0;
    return {
      good: (good += goodReviews),
      excellent: (excellent += excellentReviews)
    };
  },

  { good: 0, excellent: 0 }
);

console.log("mixReduce:", mixReduce);

console.log("Addition of two arrays using zip");
console.log("zip1:", zip([1, 2, 3], [4, 5, 6], (x, y) => x + y));

let apressBooks3 = [
  {
    name: "beginners",
    bookDetails: [
      {
        id: 111,
        title: "C# 6.0",
        author: "ANDREW TROELSEN",
        rating: [4.7]
      },
      {
        id: 222,
        title: "Efficient Learning Machines",
        author: "Rahul Khanna",
        rating: [4.5],
        reviews: []
      }
    ]
  },
  {
    name: "pro",
    bookDetails: [
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
        rating: [4.2]
      }
    ]
  }
];

let reviewDetails = [
  {
    id: 111,
    reviews: [{ good: 4, excellent: 12 }]
  },
  {
    id: 222,
    reviews: []
  },
  {
    id: 333,
    reviews: []
  },
  {
    id: 444,
    reviews: [{ good: 14, excellent: 12 }]
  }
];

const bookWithZip = zip(
  concatAll(map(apressBooks3, book => book.bookDetails)),
  reviewDetails,
  (book, review) => {
    if (book.id === review.id) {
      return { ...book, ...review };
    }
  }
);

console.log("bookWithZip", bookWithZip);
