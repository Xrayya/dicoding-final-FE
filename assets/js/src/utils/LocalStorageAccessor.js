import Book, { BookBuilder } from "../models/Book.js";

/**
 * @typedef {("finished" | "unfinished")} BookType
 */

/**
 * @param {BookType[]} types
 * @returns {Book[]}
 */
const getBooks = (types) => {
  /** @type {Book[]} */
  let bookData = [];

  types.forEach((type) => {
    const data = localStorage.getItem(`${type}-books`);
    if (data != null) {
      bookData = bookData.concat(JSON.parse(data));
    }
  });

  return bookData;
};

/**
 * @param {Book} book
 */
const addBook = (book) => {
  /** @type {Book[]} */
  let bookData = [];
  /** @type {BookType} */
  let type;

  if (book.complete) {
    bookData = bookData.concat(getBooks(["finished"]));
    type = "finished";
  } else {
    bookData = bookData.concat(getBooks(["unfinished"]));
    type = "unfinished";
  }

  bookData.push(book);
  localStorage.setItem(`${type}-books`, JSON.stringify(bookData));
};

/**
 * @param {number} index
 * @param {BookType} originType
 * @param {BookType} destinationType
 * @returns {void}
 */
const moveBook = (index, originType, destinationType) => {
  /** @type {Book[]} */
  let bookData = getBooks([originType]);

  /** @type {Book} */
  let selectedBook = bookData[index];
  selectedBook.complete = !selectedBook.complete;

  bookData.splice(index, 1);
  localStorage.setItem(`${originType}-books`, JSON.stringify(bookData));

  bookData = getBooks([destinationType]);
  bookData.push(selectedBook);
  localStorage.setItem(`${destinationType}-books`, JSON.stringify(bookData));
};

export { getBooks, addBook, moveBook };
