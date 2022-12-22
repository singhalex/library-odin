const libraryContainer = document.getElementById('library-container');
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
    const whereIsBook = library.indexOf(book);
    library.splice(whereIsBook, 1);
  });

  // Adds functionality to the hasRead button
  haveRead.className = 'read-button';
  haveRead.innerText = book.hasRead ? 'Read' : 'Not Read';
  haveRead.addEventListener('click', () => {
    bookCard.classList.toggle('has-read');
    if (bookCard.className === 'book-card has-read') {
      haveRead.innerText = 'Read';
    } else {
      haveRead.innerText = 'Not Read';
    }
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
  console.table(library);
}

const submitBook = document.getElementById('submit-book');
submitBook.addEventListener('click', () => {
  if (
    document.getElementById('title-new').checkValidity() &&
    document.getElementById('author-new').checkValidity() &&
    document.getElementById('pages-new').checkValidity()
  ) {
    createNewBook();
    document.getElementById('title-new').focus();
  }
});

submitBook.addEventListener('click', (e) => e.preventDefault());

// // Test book objects
// const book1 = new Book('The Grinch', 'Dr. Suess', '50');
// const book2 = new Book('The Very Hungry Caterpillar', 'Eric Carle', '30');
// const book3 = new Book('The Bible', 'Jesus', '1000000');

// // Add test books to the library
// library[0] = book1;
// library[1] = book2;
// library[2] = book3;
