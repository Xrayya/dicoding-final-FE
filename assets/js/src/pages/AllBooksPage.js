import BookCategoryTabController from "../components/BookCategoryTabController.js";
import {
  activateBookCategoryTab,
  attachEventListener,
  deactivateAllBookCategoryTabs,
} from "../utils/DomManipulators.js";
import Page from "./Page.js";

/**
 * @extends Page
 */
class AllBooksPage extends Page {
  constructor() {
    super("all-books");
    this.setupTabs();
  }

  setupTabs() {
    const tabController = new BookCategoryTabController();
    
    tabController.setTabId("btn-books-category-unfinished");
    tabController.displayBookList();

    attachEventListener(".tabs > button.btn-books-category", "click", (tab) => {
      tabController.setTabId(tab.id);
      tabController.displayBookList();

      deactivateAllBookCategoryTabs();
      activateBookCategoryTab(tab.id);
    });
  }
}

export default AllBooksPage;
