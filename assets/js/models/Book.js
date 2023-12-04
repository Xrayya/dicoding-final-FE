class Book {
  #timestamp;
  #title;
  #author;
  #year;
  #complete;
  #publisher;
  #categories;
  #page;
  #language;

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
    complete,
    publisher,
    categories,
    page,
    language,
  ) {
    this.#timestamp = timestamp;
    this.#title = title;
    this.#author = author;
    this.#year = year;
    this.#complete = complete;
    this.#publisher = publisher;
    this.#categories = categories;
    this.#page = page;
    this.#language = language;
  }

  getTimestamp() {
    return this.#timestamp;
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getYear() {
    return this.#year;
  }

  isComplete() {
    return this.#complete;
  }

  getPublisher() {
    return this.#publisher;
  }

  getCategories() {
    return this.#categories;
  }

  getPage() {
    return this.#page;
  }

  getLanguage() {
    return this.#language;
  }
}

class BookBuilder {
  #timestamp;
  #title;
  #author;
  #year;
  #complete;
  #publisher;
  #categories;
  #page;
  #language;

  /** @param {Date} timestamp */
  timestamp(timestamp) {
    this.#timestamp = timestamp;
  }

  /** @param {string} title */
  title(title) {
    this.#title = title;
  }

  /** @param {string} author */
  author(author) {
    this.#author = author;
  }

  /** @param {number} year */
  year(year) {
    this.#year = year;
  }

  /** @param {boolean} complete */
  complete(complete) {
    this.#complete = complete;
  }

  /** @param {string} publisher */
  publisher(publisher) {
    this.#publisher = publisher;
  }

  /** @param {string[]} categories */
  categories(categories) {
    this.#categories = categories;
  }

  /** @param {number} page */
  page(page) {
    this.#page = page;
  }

  /** @param {string} language */
  language(language) {
    this.#language = language;
  }

  /** @returns {Book} */
  build() {
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
}
