const libraryEle = document.querySelector(".library");

const myLibrary = [];

function Book(title, description, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.description = description;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(bookArray) {
  // do stuff here
  bookArray.forEach((book) => myLibrary.push(book));
}

function createBookCard(book) {
  // article
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const article = document.createElement("article");

  //   book stats
  const bookStats = document.createElement("div");

  //   amount of pages
  const pagesAmount = document.createElement("p");
  const pagesSpan = document.createElement("span");

  // has read
  const hasReadDiv = document.createElement("div");
  const hasReadLabel = document.createElement("label");
  const hasReadCheckbox = document.createElement("input");

  const listItem = document.createElement("li");

  // article
  title.textContent = book.title;
  description.textContent = book.description;
  article.append(title);
  article.append(description);

  //   book stats
  //   amount of pages
  pagesAmount.textContent = "Pages: ";
  pagesSpan.textContent = book.pages;
  pagesAmount.append(pagesSpan);

  // has read div
  hasReadLabel.textContent = "Has read";
  hasReadLabel.setAttribute("for", `has-read-${book.title}`);
  hasReadCheckbox.setAttribute("type", "checkbox");
  hasReadCheckbox.setAttribute("id", `has-read-${book.title}`);
  hasReadCheckbox.setAttribute("checked", book.isRead);
  hasReadDiv.append(hasReadLabel, hasReadCheckbox);

  bookStats.append(pagesAmount, hasReadDiv);

  listItem.append(article, bookStats);
  listItem.classList.add("book");
  libraryEle.append(listItem);
}

function updateLibraryUI() {
  myLibrary.forEach((book) => {
    createBookCard(book);
  });
}

addBookToLibrary([
  new Book(
    "The Bestest Book1",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book2",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book3",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book4",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book5",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book6",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book7",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book8",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book9",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
  new Book(
    "The Bestest Book10",
    "The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description The Bestest description",
    "Bro",
    6969,
    true
  ),
]);
updateLibraryUI();

console.log(myLibrary);
