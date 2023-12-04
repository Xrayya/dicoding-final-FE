import { attachEventListener } from "../utils/DomManipulators.js";

class Sidebar {
  /**
   * @callback cb
   */

  /**
   * @param {string} id 
   * @param {cb} callback 
  */
  static bindElementOnClick(id, callback) {
    attachEventListener(`nav button.btn-page#${id}`, "click", callback);
  }
}

export default Sidebar;
