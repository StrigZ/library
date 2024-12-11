const libraryEle = document.querySelector(".library");
const addBookButton = document.querySelector("#add-book");
const modalEle = document.querySelector("dialog");
const modalOverlay = document.querySelector(".overlay");
const newBookForm = document.querySelector("#new-book-form");

const myLibrary = [];

function Book(title, description, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.description = description;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function createBookCard(book) {
  // article
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const article = document.createElement("article");

  // book stats
  const bookStats = document.createElement("div");

  // amount of pages
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

  hasReadCheckbox.checked = book.isRead;

  hasReadDiv.append(hasReadLabel, hasReadCheckbox);

  bookStats.append(pagesAmount, hasReadDiv);

  listItem.append(article, bookStats);
  listItem.classList.add("book");
  libraryEle.append(listItem);
}

function updateLibraryUI() {
  libraryEle.innerHTML = "";
  myLibrary.forEach((book) => {
    createBookCard(book);
  });
}

function resetForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#hasRead").removeAttribute("checked");
}

function createBookFromFrom() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const hasRead = document.querySelector("#hasRead").checked;

  const newBook = new Book(title, description, author, pages, hasRead);

  resetForm();

  return newBook;
}

addBookButton.addEventListener("click", () => {
  modalEle.showModal();
});

modalEle.addEventListener("click", () => {
  modalEle.close();
});

modalOverlay.addEventListener("click", (e) => e.stopPropagation());

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(createBookFromFrom());
  updateLibraryUI();
  modalEle.close();
});
