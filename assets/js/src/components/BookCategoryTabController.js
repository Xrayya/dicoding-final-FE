import BookTabelController from "./TableController.js";

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
    const tableController = new BookTabelController("all-books-tabel");
    switch (this.#tabId) {
      case "btn-books-category-unfinished":
        tableController.setBookTypes(["unfinished"]);
        break;
      case "btn-books-category-finished":
        tableController.setBookTypes(["finished"]);
        break;
      case "btn-books-category-all":
        tableController.setBookTypes(["finished", "unfinished"]);
        break;
      default:
        tableController.setBookTypes([]);
    }
    tableController.dispatchData();
    tableController.listenChangeStatus();
  }
}

export default BookCategoryTabController;
