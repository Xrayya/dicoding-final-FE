import { findTableById } from "../utils/DomManipulators.js";
import { getBooks } from "../utils/LocalStorageAccessor.js";

class BookTableController {
  /** @typedef {("No" | "Timestamp" | "Title" | "Author" | "Publisher" | "Categories" | "Page" | "Language" | "Year of Publish" | "Completed")} columnName */

  /** @type {number | undefined} */ #maximumLine;
  /** @type {columnName[]} */ #columns;
  /** @type {string} */ #tableId;
  /** @type {("finished" | "unfinished")[]} */ #bookTypes;

  /**
   * @param {string} tableId
   */
  constructor(tableId) {
    this.#tableId = tableId;
    this.#columns = [
      "No",
      "Timestamp",
      "Title",
      "Author",
      "Publisher",
      "Categories",
      "Page",
      "Language",
      "Year of Publish",
      "Completed",
    ];
    this.#bookTypes = [];
  }

  dispatchData() {
    const tableElement = findTableById(this.#tableId);
    const books = getBooks(this.#bookTypes);
    books.forEach((book, index) => {
      if (this.#maximumLine && index + 1 > this.#maximumLine) {
        return;
      }

      const trElement = document.createElement("tr");
      this.#columns.forEach((column) => {
        const tdElement = document.createElement("td");
        switch (column) {
          case "No":
            tdElement.innerText = (index + 1).toString();
            break;
          case "Timestamp":
            tdElement.innerText = book
              .getTimestamp()
              .toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            break;
          case "Title":
            tdElement.innerText = book.getTitle();
            break;
          case "Author":
            tdElement.innerText = book.getAuthor();
            break;
          case "Publisher":
            tdElement.innerText = book.getPublisher() ?? "";
            break;
          case "Categories":
            tdElement.innerText =
              book
                .getCategories()
                ?.toString()
                .replace("[", "")
                .replace("]", "") ?? "";
            break;
          case "Page":
            tdElement.innerText = book.getPage()?.toString() ?? "";
            break;
          case "Language":
            tdElement.innerText = book.getLanguage() ?? "";
            break;
          case "Year of Publish":
            tdElement.innerText = book.getYear().toString();
            break;
          case "Completed":
            tdElement.innerText = book.isComplete() ? "Yes" : "No";
        }
        trElement.appendChild(tdElement);
      });

      tableElement?.appendChild(trElement);
    });
  }

  /** @param {("finished" | "unfinished")[]} types  */
  setBookTypes(types) {
    this.#bookTypes = types;
  }

  /**
   * @param {number} n
   */
  maximumLine(n) {
    this.#maximumLine = n;
  }

  /**
   * @param {columnName} col
   */
  excludeColumn(col) {
    this.#columns.splice(this.#columns.indexOf(col), 1);
  }
}

export default BookTableController;
