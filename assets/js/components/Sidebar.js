import { attachEventListener } from "../utils/DomManipulators.js";

class Sidebar {
  static bindElementOnClick(id, callback) {
    // console.log(`binding ${id}`);
    attachEventListener(`nav button.btn-page#${id}`, "click", callback);
  }
}

export default Sidebar;
