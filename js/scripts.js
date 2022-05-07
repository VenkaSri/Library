const addButton = document.querySelector('button');
const bookName = document.querySelector('#bookName').value;
const bookAuthor = document.querySelector('#bookAuthor').value;
const bookPages = document.querySelector('#bookPages').value;
const bTable = document.querySelector('table');



addButton.addEventListener('click', () => {
    console.log('works');
    addBookToLibrary();
})

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  myLibrary.push(new Book(bookName, bookAuthor, bookPages));
    let tRow = document.createElement('tr');
    let tCell = document.createElement('td');
    bTable.append(tRow);
    tRow.append(tCell);
    let n = document.querySelector('td');
  for(let x of myLibrary) {
    n.innerHTML = x.title;
    console.log(x.title);
}
}

