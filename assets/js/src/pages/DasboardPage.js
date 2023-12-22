import { findPageSection } from "../utils/DomManipulators.js";
import Page from "./Page.js";

/**
 * @extends Page
 */
class DashboardPage extends Page {
  constructor() {
    super("dashboard");
  }
}

export default DashboardPage;
