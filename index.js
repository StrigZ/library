const libraryEle = document.querySelector(".library");
const addBookButton = document.querySelector("#add-book");
const modalEle = document.querySelector("dialog");
const modalOverlay = document.querySelector(".overlay");
const newBookForm = document.querySelector("#new-book-form");

const myLibrary = [];

function Book(title, description, author, pages, isRead) {
  // the constructor...
  this.id = Math.random().toString().split(".")[1];
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
  // Create DOM elements
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const article = document.createElement("article");
  const deleteBookButton = document.createElement("button");
  const bookStats = document.createElement("div");
  const pagesAmountParagraph = document.createElement("p");
  const pagesAmountSpan = document.createElement("span");
  const hasReadDiv = document.createElement("div");
  const hasReadLabel = document.createElement("label");
  const hasReadCheckbox = document.createElement("input");
  const unreadButton = document.createElement("button");
  const listItem = document.createElement("li");

  // Modify article elements and append them
  deleteBookButton.textContent = "DELETE";
  deleteBookButton.classList.add("delete-button");
  deleteBookButton.addEventListener("click", () => {
    const index = myLibrary.findIndex((b) => b.id === book.id);

    if (index === -1) {
      return;
    }

    myLibrary.splice(index, 1);
    updateLibraryUI();
  });
  title.textContent = book.title;
  description.textContent = book.description;
  article.append(title, deleteBookButton, description);

  //   Modify book stats elements and append them
  pagesAmountParagraph.textContent = "Pages: ";
  pagesAmountSpan.textContent = book.pages;
  pagesAmountParagraph.append(pagesAmountSpan);
  hasReadLabel.textContent = "Has read";
  hasReadLabel.setAttribute("for", `has-read-${book.title}`);
  hasReadCheckbox.setAttribute("type", "checkbox");
  hasReadCheckbox.setAttribute("id", `has-read-${book.title}`);
  hasReadCheckbox.checked = book.isRead;
  hasReadCheckbox.disabled = true;
  unreadButton.textContent = book.isRead ? "Unread" : "Read";
  unreadButton.setAttribute("type", "button");
  unreadButton.addEventListener("click", () => {
    book.isRead = !book.isRead;
    updateLibraryUI();
  });
  hasReadDiv.append(hasReadLabel, hasReadCheckbox, unreadButton);
  bookStats.append(pagesAmountParagraph, hasReadDiv);

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
  document.querySelector("#hasRead").checked = false;
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

newBookForm.addEventListener("click", (e) => e.stopPropagation());

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(createBookFromFrom());
  updateLibraryUI();
  modalEle.close();
});
