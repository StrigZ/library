import BookCard from "./js/BookCard.js";
import Book from "./js/classes/Book.js";
import Library from "./js/classes/Library.js";

const libraryContainer = document.querySelector(".library");
const openNewBookFormBtn = document.querySelector("#add-book");
const modalEle = document.querySelector("dialog");
const newBookForm = document.querySelector("#new-book-form");

export function updateLibraryUI() {
  libraryContainer.innerHTML = "";
  myLibrary.books.forEach((book) => {
    libraryContainer.append(BookCard(book));
  });
}

function resetForm() {
  newBookForm.reset();
}

const getFormData = () => {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const hasRead = document.querySelector("#hasRead").checked;

  return {
    title,
    description,
    author,
    pages,
    hasRead,
  };
};

function createBookFromFrom() {
  const { title, description, author, pages, hasRead } = getFormData();
  resetForm();
  return new Book(title, description, author, pages, hasRead);
}

openNewBookFormBtn.addEventListener("click", () => {
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
