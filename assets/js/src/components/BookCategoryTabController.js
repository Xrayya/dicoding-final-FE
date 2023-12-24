import {
  activateBookCategoryTab,
  deactivateAllBookCategoryTabs,
} from "../utils/DomManipulators.js";
import BookTableController from "./TableController.js";

class BookCategoryTabController {
  /** @type {string} */ #tabId;

  constructor() {
    this.#tabId = "";
  }

  /** @param {string} tabId  */
  setTabId(tabId) {
    this.#tabId = tabId;
  }

  /**
   * @returns {void}
   */
  displayBookList() {
    deactivateAllBookCategoryTabs();
    activateBookCategoryTab(this.#tabId);
    const tableController = new BookTableController("all-books-table");
    switch (this.#tabId) {
      case "btn-books-category-unfinished":
        tableController.setBookTypes(["unfinished"]);
        break;
      case "btn-books-category-finished":
        tableController.setBookTypes(["finished"]);
        break;
      case "btn-books-category-all":
        tableController.setBookTypes(["finished", "unfinished"]);
      default:
        tableController.setBookTypes([]);
    }
    tableController.dispatchData();
  }
}

export default BookCategoryTabController;
