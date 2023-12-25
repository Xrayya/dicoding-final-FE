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

  document.querySelectorAll("button.btn-page").forEach((button) => {
    button.classList.remove("active");
  });
};

/**
 * @param {string} sectionId
 * @returns {void}
 */
const activatePageSection = (sectionId) => {
  document
    .querySelector(`section.page#${sectionId}`)
    ?.classList.remove("page-inactive");

  document
    .querySelector(`button.btn-page#btn-page-${sectionId}`)
    ?.classList.add("active");
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

/**
 * @param {string} inputElementSelector
 * @returns {string}
 */
const getValueOfInput = (inputElementSelector) => {
  const inputElement = document.querySelector(inputElementSelector);
  if (inputElement instanceof HTMLInputElement) {
    return inputElement.value;
  }

  return "";
};

export {
  findPageSection,
  closeAllPageSection,
  activatePageSection,
  deactivateAllBookCategoryTabs,
  activateBookCategoryTab,
  attachEventListener,
  findTableById,
  getValueOfInput,
};
