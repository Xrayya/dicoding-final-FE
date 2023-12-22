import { attachEventListener } from "../utils/DomManipulators.js";

class Sidebar {
  /**
   * @callback NoParamsCallback
   */

  /**
   * @param {string} id 
   * @param {NoParamsCallback} callback 
  */
  static bindElementOnClick(id, callback) {
    attachEventListener(`nav button.btn-page#${id}`, "click", callback);
  }
}

export default Sidebar;
