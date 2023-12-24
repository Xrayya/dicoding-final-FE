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
class DashboardPage extends Page {
  constructor() {
    super("dashboard");
    this.setupTabs()
  }

  setupTabs() {
    const tabController = new BookCategoryTabController();
    attachEventListener(".tabs > button.btn-books-category", "click", (tab) => {
      tabController.setTabId(tab.id);
      tabController.displayBookList();

      deactivateAllBookCategoryTabs();
      activateBookCategoryTab(tab.id);
    });
  }
}

export default DashboardPage;
