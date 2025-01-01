export default function BookCard({ title, description, id, pages, isRead }) {
  // Create DOM elements
  const titleEle = document.createElement("h2");
  const descriptionEle = document.createElement("p");
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
    myLibrary.removeBookFromLibrary(id);
    updateLibraryUI();
  });
  titleEle.textContent = title;
  descriptionEle.textContent = description;
  article.append(titleEle, deleteBookButton, descriptionEle);

  //   Modify book stats elements and append them
  pagesAmountParagraph.textContent = "Pages: ";
  pagesAmountSpan.textContent = pages;
  pagesAmountParagraph.append(pagesAmountSpan);
  hasReadLabel.textContent = "Has read";
  hasReadLabel.setAttribute("for", `has-read-${title}`);
  hasReadCheckbox.setAttribute("type", "checkbox");
  hasReadCheckbox.setAttribute("id", `has-read-${title}`);
  hasReadCheckbox.checked = isRead;
  hasReadCheckbox.disabled = true;
  unreadButton.textContent = isRead ? "Unread" : "Read";
  unreadButton.setAttribute("type", "button");
  unreadButton.addEventListener("click", () => {
    isRead = !isRead;
    updateLibraryUI();
  });
  hasReadDiv.append(hasReadLabel, hasReadCheckbox, unreadButton);
  bookStats.append(pagesAmountParagraph, hasReadDiv);

  listItem.append(article, bookStats);
  listItem.classList.add("book");

  return listItem;
}
