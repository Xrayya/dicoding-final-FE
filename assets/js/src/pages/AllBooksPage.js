import { attachEventListener } from "../utils/DomManipulators.js";
import Page from "./Page.js";

/**
 * @extends Page
 */
class AllBooksPage extends Page {
  constructor() {
    super("all-books");
  }

  setupTabs() {
    attachEventListener("tabs > button.btn-books-category", "click", (button) => {
      if (button.classList.contains("active")) {
        
      }
    })
  }
}

export default AllBooksPage;
