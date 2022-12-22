const libraryContainer = document.getElementById('library-container');
const submitBookButton = document.getElementById('submit-book');
const library = [];

function Book(title, author, pages, hasRead) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.toggleHasRead = function () {
  this.hasRead = !this.hasRead;
};

submitBookButton.addEventListener('click', addBookIfInputValid);

function addBookIfInputValid() {
  if (
    // Checks each input field for a valid entry
    document.getElementById('title-new').checkValidity() &&
    document.getElementById('author-new').checkValidity() &&
    document.getElementById('pages-new').checkValidity()
  ) {
    console.log('valid check');
    submitBookButton.addEventListener('click', (event) => event.preventDefault());
    createNewBook();
    // Removes focus from input fields
    document.activeElement.blur();
  }
}

function createNewBook() {
  // Take user inputs to form a new book object and adds it to the page

  const form = document.getElementById('add-new-book');

  // Creates variables from the inputs on the form
  const titleNew = document.getElementById('title-new').value;
  const authorNew = document.getElementById('author-new').value;
  const pagesNew = document.getElementById('pages-new').value;
  const readNew = document.getElementById('read-new').checked;

  // Creates a newBook object from the user input fields
  const newBook = new Book(titleNew, authorNew, pagesNew, readNew);

  displayBook(newBook);
  form.reset();
}

function displayBook(book) {
  // Creates the html elements that comprise a card
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const deleteBookButton = document.createElement('button');
  const haveRead = document.createElement('button');

  // Identifies the index of the book in the library array
  library.push(book);
  const bookIndex = library.indexOf(book);

  addClassAndTextToElements(bookCard, title, author, pages, book, bookIndex, deleteBookButton, haveRead);

  addHaveReadStatus(haveRead, book, bookCard);

  // Builds the cards structure and adds it to the DOM
  libraryContainer.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(deleteBookButton);
  bookCard.appendChild(haveRead);
}

function addClassAndTextToElements(bookCard, title, author, pages, book, bookIndex, deleteBookButton, haveRead) {
  bookCard.className = 'book-card';
  bookCard.setAttribute('data-attribute', bookIndex);

  title.innerText = book.title;
  title.className = 'title';

  author.innerText = `by ${book.author}`;
  author.className = 'author';

  pages.innerText = `${book.pages} pages`;
  pages.className = 'pages';

  deleteBookButton.className = 'delete';
  deleteBookButton.innerText = 'X';
  // Add delete book functionality to the delete button
  deleteBookButton.addEventListener('click', () => deleteBook(bookIndex));

  haveRead.className = 'read-button';
  haveRead.innerText = book.hasRead ? 'Read' : 'Not Read';
}

function deleteBook(bookIndex) {
  document.querySelector(`[data-attribute="${bookIndex}"]`).remove();

  /* locates the object in the array and removes it
    This causes issues of duplicate data-attributes.
    I need to find a solution to this or risk the library getting too large

    const whereIsBook = library.indexOf(book);
    library.splice(whereIsBook, 1);
    */
}

function addHaveReadStatus(haveRead, book, bookCard) {
  haveRead.addEventListener('click', () => {
    // Toggles the class of the card container for styling
    bookCard.classList.toggle('has-read');
    if (bookCard.className === 'book-card has-read') {
      haveRead.innerText = 'Read';
    } else {
      haveRead.innerText = 'Not Read';
    }
    // Toggles the object value for read status
    book.toggleHasRead();
  });

  if (book.hasRead) {
    bookCard.className += ' has-read';
  }
}
