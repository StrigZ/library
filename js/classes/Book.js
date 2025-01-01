export default class Book {
  constructor(title, description, author, pages, isRead) {
    this.id = Math.random().toString().split(".")[1];
    this.title = title;
    this.description = description;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}
