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
    submitBookButton.addEventListener('click', (event) => event.preventDefault());
    createNewBook();
    document.activeElement.blur();
  }
}

function createNewBook() {
  // Take user input to form a new book object and adds it to the page
  const form = document.getElementById('add-new-book');
  const titleNew = document.getElementById('title-new').value;
  const authorNew = document.getElementById('author-new').value;
  const pagesNew = document.getElementById('pages-new').value;
  const readNew = document.getElementById('read-new').checked;

  // Creates a newBook object from the user input fields
  const newBook = new Book(titleNew, authorNew, pagesNew, readNew);

  displayBooks(newBook);
  form.reset();
}

function displayBooks(book) {
  // Creates the html elements that comprise a card
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const deleteBook = document.createElement('button');
  const haveRead = document.createElement('button');

  // Identifies the index of the book in the library array
  library.push(book);
  const bookIndex = library.indexOf(book);

  // Adds the appropriate classes and text to the elements
  bookCard.className = 'book-card';
  bookCard.setAttribute('data-attribute', bookIndex);

  title.innerText = book.title;
  title.className = 'title';

  author.innerText = `by ${book.author}`;
  author.className = 'author';

  pages.innerText = `${book.pages} pages`;
  pages.className = 'pages';

  // Adds functionality to the delete button
  deleteBook.className = 'delete';
  deleteBook.innerText = 'X';
  deleteBook.addEventListener('click', () => {
    document.querySelector(`[data-attribute="${bookIndex}"]`).remove();

    // locates the object in the array and removes it
    const whereIsBook = library.indexOf(book);
    library.splice(whereIsBook, 1);
  });

  // Changes the class and text when the read button is clicked
  haveRead.className = 'read-button';
  haveRead.innerText = book.hasRead ? 'Read' : 'Not Read';
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
    console.table(book);
  });

  // Adds a class to read books for styling
  if (book.hasRead) {
    bookCard.className += ' has-read';
  }

  // Builds the cards structure and adds it to the DOM
  libraryContainer.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(deleteBook);
  bookCard.appendChild(haveRead);
}
