/**
 * @param {string} sectionId
 * @returns {HTMLElement}
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
  document
    .querySelector(`section.page#${sectionId}`)
    .classList.remove("page-inactive");
};

/**
 * @callback cb
 * @param {string} selector
 * @param {cb} callback
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

export {
  findPageSection,
  closeAllPageSection,
  activatePageSection,
  attachEventListener,
};
