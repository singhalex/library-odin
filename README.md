# Library - The Odin Project

Odin Project Exercise - Library
https://www.theodinproject.com/lessons/node-path-javascript-library

Using HTML, CSS, and Javascript, I built a page that displays and tracks the read status of books entered by the user.

HTML is a simple title with a form that is used to create new cards on the page.

CSS is used to style and arrange the elements on the page using a mix of flex and grid.

Javascript takes the input fields and constructs book object that is used to construct a card to add to the DOM.
I also hadded a delete button that removes the card from the DOM. This is done by assigning the card a data-attribute
based on the index of the book in the array. The delete button then targets that attribute to delete it.
Also added a button to change the read status of the book object property and style it accordingly.
