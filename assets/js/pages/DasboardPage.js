import { findPageSection } from "../utils/DomManipulators.js";
import Page from "./Page.js";

class DashboardPage extends Page {
  constructor() {
    super("dashboard");
  }

  static getInstance() {
    if (this.INSTANCE) {
      return this.INSTANCE;
    }

    this.INSTANCE = new this();
  }
}

export default DashboardPage;
