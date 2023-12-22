import { activateBookCategoryTab, attachEventListener, deactivateAllBookCategoryTabs } from "../utils/DomManipulators.js";

class BookCategoryTab {
  /** @type {string} */ #tabId;

  /** @param {string} tabId  */
  constructor(tabId) {
    this.#tabId = tabId
  }

  /** @returns {void} */
  displayBookList() {
    deactivateAllBookCategoryTabs();
    activateBookCategoryTab(this.#tabId);
  }
}

export default BookCategoryTab;
