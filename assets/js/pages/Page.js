import {
  activatePageSection,
  closeAllPageSection,
  findPageSection,
} from "../utils/DomManipulators.js";

class Page {
  constructor(sectionId) {
    this.sectionId = sectionId;
    this.sectionDOM = findPageSection(this.sectionId);
  }

  displayPage() {
    closeAllPageSection();
    activatePageSection(this.sectionId);
  }

  moveToPage(page) {
    if (page.sectionId == this.sectionId) return;
    page.displayPage();
  }
}

export default Page;
