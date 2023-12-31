import AddBookPopUp from "../components/AddBookPopUp.js";
import {
  activatePageSection,
  closeAllPageSection,
  findPageSection,
} from "../utils/DomManipulators.js";

class Page {
  /** @param {string} sectionId */
  constructor(sectionId) {
    this.sectionId = sectionId;
    this.sectionDOM = findPageSection(this.sectionId);
    const addBookPopUp = new AddBookPopUp();
    addBookPopUp.listenOnSubmit()
  }

  /** @returns {void} */
  displayPage() {
    closeAllPageSection();
    activatePageSection(this.sectionId);
  }

  /**
   * @param {Page} page
   * @returns {void}
   */
  static moveToPage(page) {
    page.displayPage();
  }
}

export default Page;
