const findPageSection = (sectionId) => {
  return document.querySelector(`section.page#${sectionId}`);
};

const closeAllPageSection = () => {
  document.querySelector("section.page").classList.add("inactive");
};

const activatePageSection = (sectionId) => {
  document
    .querySelector(`section.page#${sectionId}`)
    .classList.remove("inactive");
};

export { findPageSection, closeAllPageSection, activatePageSection };
