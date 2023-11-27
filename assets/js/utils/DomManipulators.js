const findPageSection = (sectionId) => {
  return document.querySelector(`section.page#${sectionId}`);
};

const closeAllPageSection = () => {
  document.querySelectorAll("section.page").forEach((page) => {
    page.classList.add("page-inactive");
  });
};

const activatePageSection = (sectionId) => {
  document
    .querySelector(`section.page#${sectionId}`)
    .classList.remove("page-inactive");
};

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
