/**
 * @callback NoParamsCallback
 */

/**
 * @callback addEventListenerCallback
 * @param {Element} item
 */

/**
 * @param {string} sectionId
 * @returns {HTMLElement | null}
 */
const findPageSection = (sectionId) => {
  return document.querySelector(`section.page#${sectionId}`);
};

/**
 * @returns {void}
 */
const closeAllPageSection = () => {
  document.querySelectorAll("section.page").forEach((page) => {
    page.classList.add("page-inactive");
  });
};

/**
 * @param {string} sectionId
 * @returns {void}
 */
const activatePageSection = (sectionId) => {
  document.querySelector(`section.page#${sectionId}`)?.classList.remove("page-inactive");
};

/**
 * @returns {void}
 */
const deactivateAllBookCategoryTabs = () => {
  document
    .querySelectorAll(".tabs > button.btn-books-category")
    .forEach((tab) => {
      tab.classList.remove("active");
    });
};

/**
 * @param {string} tabId
 * @returns {void}
 */
const activateBookCategoryTab = (tabId) => {
  document
    .querySelector(`.tabs > button.btn-books-category#${tabId}`)
    ?.classList.add("active");
};

/**
 * @param {string} selector
 * @param {addEventListenerCallback} callback
 * @param {string} eventType
 * @returns {void}
 */
const attachEventListener = (selector, eventType, callback) => {
  document.querySelectorAll(selector).forEach((item) => {
    item.addEventListener(eventType, () => {
      // console.log(`${eventType} event is triggered on "${selector}"`);
      callback(item);
    });
  });
};

/**
 * @param {string} tableid
 * @returns {HTMLElement | null}
 */
const findTableById = (tableid) => {
  return document.querySelector(`table#${tableid}`);
};

export {
  findPageSection,
  closeAllPageSection,
  activatePageSection,
  deactivateAllBookCategoryTabs,
  activateBookCategoryTab,
  attachEventListener,
  findTableById,
};
