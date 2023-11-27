import {
  activatePageSection,
  attachEventListener,
  closeAllPageSection,
  findPageSection,
} from "../utils/DomManipulators.js";

class Page {
  constructor(sectionId) {
    // console.log(`creating Page object with id "${sectionId}"`)
    this.sectionId = sectionId;
    this.sectionDOM = findPageSection(this.sectionId);
  }

  // static getInstance() {
  //   if (this.INSTANCE) {
  //     return this.INSTANCE;
  //   }

  //   this.INSTANCE = new this();
  // }

  displayPage() {
    // console.log(`displaying page ${this.constructor.name}`)
    closeAllPageSection();
    activatePageSection(this.sectionId);
  }

  static moveToPage(page) {
    // console.log(`moveToPage() invoked, moving to page ${page.constructor.name}`)
    page.displayPage();
  }
}

export default Page;
