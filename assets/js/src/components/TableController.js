import {
  attachEventListener,
  findTableById,
} from "../utils/DomManipulators.js";
import { getBooks, moveBook } from "../utils/LocalStorageAccessor.js";

class BookTabelController {
  /** @typedef {("No" | "Timestamp" | "Title" | "Author" | "Publisher" | "Categories" | "Page" | "Language" | "Year of Publish" | "Completed")} columnName
   * @typedef {("finished" | "unfinished")} BookType
   */

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
    document.addEventListener("bookDataChange", () => {
      this.dispatchData();
    });
  }

  dispatchData() {
    console.log(this.#tableId, this.#maximumLine, this.#columns);
    const tableElement = findTableById(this.#tableId)?.lastChild;
    while (tableElement?.lastChild !== tableElement?.firstChild) {
      tableElement?.lastChild?.remove();
    }

    const books = getBooks(this.#bookTypes);
    books.sort((a, b) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });
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
            tdElement.innerText = new Date(book.timestamp).toLocaleDateString(
              "en-us",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              },
            );
            break;
          case "Title":
            tdElement.innerText = book.title;
            break;
          case "Author":
            tdElement.innerText = book.author;
            break;
          case "Publisher":
            tdElement.innerText = book.publisher ?? "";
            break;
          case "Categories":
            tdElement.innerText =
              book.categories?.toString().replace("[", "").replace("]", "") ??
              "";
            break;
          case "Page":
            tdElement.innerText = book.page?.toString() ?? "";
            break;
          case "Language":
            tdElement.innerText = book.language ?? "";
            break;
          case "Year of Publish":
            tdElement.innerText = book.year.toString();
            break;
          case "Completed":
            // tdElement.innerText = book.complete ? "Yes" : "No";

            /** @type {string} */
            let htmlText = "";
            // htmlText += `<div style="display: flex; gap: 4px">`
            // htmlText += `<div>`
            // htmlText += `<input type="radio" name="is-completed" value="true" timestamp="${book.timestamp}" ${book.complete ? "checked" : ""} />`
            // htmlText += `<label>Yes</label>`
            // htmlText += `</div>`
            // htmlText += `<div>`
            // htmlText += `<input type="radio" name="is-completed" value="false" timestamp="${book.timestamp}" ${book.complete ? "" : "checked"}/>`
            // htmlText += `<label>No</label>`
            // htmlText += `</div>`
            // htmlText += `</div>`

            htmlText += book.complete ? "Yes " : "No ";
            htmlText += `<input type="button" class="btn-completion" name="${index}" value="Set ${book.complete ? "No" : "Yes"
              }" origin="${book.complete ? "finished" : "unfinished"
              }" destination="${book.complete ? "unfinished" : "finished"}" />`;

            tdElement.innerHTML = htmlText;
        }
        trElement.appendChild(tdElement);
      });

      tableElement?.appendChild(trElement);
    });
    this.listenChangeStatus();
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

  listenChangeStatus() {
    document.querySelectorAll("table .btn-completion").forEach((button) => {
      button.addEventListener("click", (event) => {
        if (button instanceof HTMLInputElement) {
          /** @type {BookType} */
          let origin;
          if (button.getAttribute("origin") == "finished") {
            origin = "finished";
          } else {
            origin = "unfinished";
          }

          /** @type {BookType} */
          let destination;
          if (button.getAttribute("destination") == "finished") {
            destination = "finished";
          } else {
            destination = "unfinished";
          }

          moveBook(parseInt(button.name), origin, destination);
          document.dispatchEvent(new Event("bookDataChange"));
        }
        event.stopImmediatePropagation();
      });
    });
  }
}

export default BookTabelController;
