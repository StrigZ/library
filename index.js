import BookCard from "./js/BookCard.js";
import Book from "./js/classes/Book.js";
import Library from "./js/classes/Library.js";

const libraryEle = document.querySelector(".library");
const addBookButton = document.querySelector("#add-book");
const modalEle = document.querySelector("dialog");
const newBookForm = document.querySelector("#new-book-form");

export function updateLibraryUI() {
  libraryEle.innerHTML = "";
  myLibrary.books.forEach((book) => {
    libraryEle.append(BookCard(book));
  });
}
function resetForm() {
  newBookForm.reset();
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
  myLibrary.addBookToLibrary(createBookFromFrom());
  updateLibraryUI();
  modalEle.close();
});

const myLibrary = new Library();
export { myLibrary };
