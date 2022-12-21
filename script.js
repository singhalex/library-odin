const library = [];

function Book(title, author, pages) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary() {
  // do stuff here
}

const book1 = new Book('The Grinch', 'Dr. Suess', '50');
const book2 = new Book('The Very Hungry Caterpillar', 'Eric Carle', '30');
const book3 = new Book('The Bible', 'Jesus', '1000000');

library[0] = book1;
library[1] = book2;
library[2] = book3;

const libraryContainer = document.getElementById('library-container');

console.log(libraryContainer);

library.forEach((book) => {
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const bookCard = document.createElement('div');

  title.innerText = book.title;
  title.className = 'title';

  author.innerText = `by ${book.author}`;
  author.className = 'author';

  pages.innerText = `${book.pages} pages`;
  pages.className = 'pages';

  bookCard.className = 'book-card';

  libraryContainer.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
});
