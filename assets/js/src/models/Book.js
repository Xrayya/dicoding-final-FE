class Book {

  timestamp;
  title;
  author;
  year;
  complete;
  publisher;
  categories;
  page;
  language;

  /**
   * @param {Date} timestamp
   * @param {string} title
   * @param {string} author
   * @param {number} year
   * @param {boolean} [complete=false]
   * @param {string} [publisher]
   * @param {string[]} [categories]
   * @param {number} [page]
   * @param {string} [language]
   * */
  constructor(
    timestamp,
    title,
    author,
    year,
    complete = false,
    publisher,
    categories,
    page,
    language,
  ) {
    this.timestamp = timestamp;
    this.title = title;
    this.author = author;
    this.year = year;
    this.complete = complete;
    this.publisher = publisher;
    this.categories = categories;
    this.page = page;
    this.language = language;
  }
}

class BookBuilder {
  /** @type {Date | undefined} */ #timestamp;
  /** @type {string | undefined} */ #title;
  /** @type {string | undefined} */ #author;
  /** @type {number | undefined} */ #year;
  /** @type {boolean | undefined} */ #complete;
  /** @type {string | undefined} */ #publisher;
  /** @type {string[] | undefined} */ #categories;
  /** @type {number | undefined} */ #page;
  /** @type {string | undefined} */ #language;

  /** @param {Date} timestamp */
  timestamp(timestamp) {
    this.#timestamp = timestamp;
    return this;
  }

  /** @param {string} title */
  title(title) {
    this.#title = title;
    return this;
  }

  /** @param {string} author */
  author(author) {
    this.#author = author;
    return this;
  }

  /** @param {number} year */
  year(year) {
    this.#year = year;
    return this;
  }

  /** @param {boolean} complete */
  complete(complete) {
    this.#complete = complete;
    return this;
  }

  /** @param {string} publisher */
  publisher(publisher) {
    this.#publisher = publisher;
    return this;
  }

  /** @param {string[]} categories */
  categories(categories) {
    this.#categories = categories;
    return this;
  }

  /** @param {number} page */
  page(page) {
    this.#page = page;
    return this;
  }

  /** @param {string} language */
  language(language) {
    this.#language = language;
    return this;
  }

  /** @returns {Book | null} */
  build() {
    if (
      this.#timestamp !== undefined &&
      this.#title !== undefined &&
      this.#author !== undefined &&
      this.#year !== undefined
    ) {
      return new Book(
        this.#timestamp,
        this.#title,
        this.#author,
        this.#year,
        this.#complete,
        this.#publisher,
        this.#categories,
        this.#page,
        this.#language,
      );
    }

    return null;
  }
}

export default Book
export {
  BookBuilder
}
