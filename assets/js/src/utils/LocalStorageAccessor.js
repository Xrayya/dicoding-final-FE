/**
 * @param {("finished" | "unfinished")[]} types
 * @returns {Book[]}
 */
const getBooks = (types) => {
  /** @type {Book[]} */
  const bookData = [];

  types.forEach((type) => {
    const data = sessionStorage.getItem(`${type}-books`);
    if (data != null) {
      bookData.push(JSON.parse(data));
    }
  });

  return [];
};

export { getBooks };
