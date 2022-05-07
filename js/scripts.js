const addButton = document.querySelector('button');
// const bookName = document.querySelector('#bookName').value;
// const bookAuthor = document.querySelector('#bookAuthor').value;
// const bookPages = document.querySelector('#bookPages').value;
// const bTable = document.querySelector('table');
const mainCont = document.querySelector('.main-container');



addButton.addEventListener('click', () => {
  createInput();
  let card = document.querySelector('.card');

})  




function sayHi() {
  return 'hi';
}



let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// function addBookToLibrary() {
//   myLibrary.push(new Book(bookName, bookAuthor, bookPages));
//     let tRow = document.createElement('tr');
//     let tCell = document.createElement('td');
//     bTable.append(tRow);
//     tRow.append(tCell);
//     let n = document.querySelector('td');
//   for(let x of myLibrary) {
//     n.innerHTML = x.title;
//     console.log(x.title);
// }
// }



let cardDiv = `
    
<div class="card">
    <div class="book-info">
        <input type="text" id="bookName" placeholder="Book name">
        <input type="author" id="bookAuthor" placeholder="Author">
        <input type="number" id="bookPages" placeholder="Pages">
        <div class="book-read">
            <input type="checkbox" id="readCheck" name="readCheck" value="Read">
            <label for="readCheck">Read</label><br>
        </div>
        <div class="addBtn">Add</div>
    </div>    
</div>



`;

//form to add book
function createInput() {

  let div = document.createElement('div');
  div.classList.add('card');
  let divTwo = document.createElement('div');
  divTwo.classList.add('book-info');
  let book = document.createElement("input");
  book.setAttribute("type", "text");
  book.setAttribute("id", "bookName");
  book.setAttribute("placeholder", "Book name");
  let author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("id", "bookAuthor");
  author.setAttribute("placeholder", "Author");
  let page = document.createElement("input");
  page.setAttribute("type", "text");
  page.setAttribute("id", "bookPages");
  page.setAttribute("placeholder", "Pages");

  div.append(divTwo);
  divTwo.append(book);
  divTwo.append(author);
  divTwo.append(page);

  mainCont.append(div);
}



