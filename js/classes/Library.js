export default class Library {
  constructor(books = []) {
    this.books = books;
  }
  toggleBookReadStatus(bookId) {
    const booksToChange = this.books.find(({ id }) => id === bookId);
    booksToChange.isRead = !booksToChange.isRead;
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
