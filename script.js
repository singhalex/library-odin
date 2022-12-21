const libraryContainer = document.getElementById('library-container');
const library = [];

function Book(title, author, pages) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}
function displayBooks(book) {
  // Creates the various elements the comprise a card
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const deleteBook = document.createElement('button');
  const haveRead = document.createElement('input');

  // Adds the appropriate classes and text to the elements
  bookCard.className = 'book-card';

  title.innerText = book.title;
  title.className = 'title';

  author.innerText = `by ${book.author}`;
  author.className = 'author';

  pages.innerText = `${book.pages} pages`;
  pages.className = 'pages';

  deleteBook.className = 'delete';
  deleteBook.innerText = 'X';

  haveRead.setAttribute('type', 'checkbox');
  haveRead.className = 'have-read';

  // Builds the cards structure and adds it to the DOM
  libraryContainer.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(deleteBook);
  bookCard.appendChild(haveRead);
}

function addBookToLibrary() {
  // Adds each book in the library to the page
  library.forEach((book) => displayBooks(book));
}

function createNewBook() {
  // Take user input to form a new book object and add it to the library array
}

// Test book objects
const book1 = new Book('The Grinch', 'Dr. Suess', '50');
const book2 = new Book('The Very Hungry Caterpillar', 'Eric Carle', '30');
const book3 = new Book('The Bible', 'Jesus', '1000000');

// Add test books to the library
library[0] = book1;
library[1] = book2;
library[2] = book3;

addBookToLibrary();
