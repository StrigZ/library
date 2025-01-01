import BookCard from "./js/BookCard.js";

const libraryEle = document.querySelector(".library");
const addBookButton = document.querySelector("#add-book");
const modalEle = document.querySelector("dialog");
const newBookForm = document.querySelector("#new-book-form");

function updateLibraryUI() {
  libraryEle.innerHTML = "";
  myLibrary.books.forEach((book) => {
    libraryEle.append(BookCard(book));
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
  myLibrary.addBookToLibrary(createBookFromFrom());
  updateLibraryUI();
  modalEle.close();
});

class Book {
  constructor(title, description, author, pages, isRead) {
    this.id = Math.random().toString().split(".")[1];
    this.title = title;
    this.description = description;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor(books = []) {
    this.books = books;
  }

  addBookToLibrary(newBook) {
    this.books.push(newBook);
  }

  removeBookFromLibrary(id) {
    const index = this.books.findIndex((b) => b.id === id);

    if (index === -1) {
      return;
    }

    this.books.splice(index, 1);
  }
}

const myLibrary = new Library();
