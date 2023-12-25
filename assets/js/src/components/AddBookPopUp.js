import { BookBuilder } from "../models/Book.js";
import {
  attachEventListener,
  getValueOfInput,
} from "../utils/DomManipulators.js";
import { addBook } from "../utils/LocalStorageAccessor.js";

class AddBookPopUp {
  constructor() {
    this.#setupUI();
  }

  #setupUI() {
    attachEventListener(".btn-add-book", "click", () => {
      document.querySelector(".add-book-pop-up")?.classList.add("active");
    });

    attachEventListener(".btn-pop-up-close", "click", () => {
      document.querySelector(".add-book-pop-up")?.classList.remove("active");
    });
  }

  listenOnSubmit() {
    document
      .querySelector("#add-book-form")
      ?.addEventListener("submit", (event) => {
        // console.log("completed?", getValueOfInput(this.#getSelectorByName("complete")));
        // console.log("title", getValueOfInput(this.#getSelectorByName("title")));
        const bookBuilder = new BookBuilder()
          .timestamp(new Date())
          .title(getValueOfInput(this.#getSelectorByName("title")))
          .author(getValueOfInput(this.#getSelectorByName("author")))
          .year(parseInt(getValueOfInput(this.#getSelectorByName("year"))))
          .complete(
            getValueOfInput(this.#getSelectorByName("completed")) === "true",
          );

        /** @type {string} */
        let temp;

        temp = getValueOfInput(this.#getSelectorByName("publisher"));
        if (temp !== "") {
          bookBuilder.publisher(temp);
        }

        temp = getValueOfInput(this.#getSelectorByName("categories"));
        if (temp !== "") {
          bookBuilder.categories(temp.split(","));
        }

        temp = getValueOfInput(this.#getSelectorByName("page"));
        if (temp !== "") {
          bookBuilder.page(parseInt(temp));
        }

        temp = getValueOfInput(this.#getSelectorByName("language"));
        if (temp !== "") {
          bookBuilder.language(temp);
        }

        const book = bookBuilder.build();
        if (book !== null) {
          console.log("new book", book);
          addBook(book);
          document.dispatchEvent(new Event("bookDataChange"));
          document
            .querySelector(".add-book-pop-up")
            ?.classList.remove("active");
        }
        event.preventDefault();
        event.stopImmediatePropagation();
      });
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  #getSelectorByName(name) {
    return `#add-book-form input[name="${name}"]`;
  }
}

export default AddBookPopUp;
