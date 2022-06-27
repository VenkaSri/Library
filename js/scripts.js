const addButton = document.querySelector('button');

// const bTable = document.querySelector('table');
const mainCont = document.querySelector('.main-container');
let checkRead;




addButton.addEventListener('click', () => {
  createInput();


})  

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}



function addBookToLibrary() {
  myLibrary.push(new Book(bookName.value, bookAuthor.value, bookPages.value));

}


//form card 
function createInput() {
  let addDiv = document.createElement('div');
  addDiv.classList.add('addBtn');
  addDiv.innerHTML = 'Add';
  let mainDiv = document.createElement('div');
  mainDiv.classList.add('card');
  let infoDiv = document.createElement('div');
  infoDiv.classList.add('book-info');
  let readDiv = document.createElement('div');
  readDiv.classList.add('book-read');
  let book = document.createElement("input");
  book.setAttribute("type", "text");
  book.setAttribute("id", "bookName");
  book.setAttribute("placeholder", "Book name");
  book.required = true;
  let author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("id", "bookAuthor");
  author.setAttribute("placeholder", "Author");
  author.required = true;
  let page = document.createElement("input");
  page.setAttribute("type", "number");
  page.setAttribute("id", "bookPages");
  page.setAttribute("placeholder", "Pages");
  page.required = true;
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "readCheck");
  checkbox.setAttribute("name", "readCheck");
  checkbox.setAttribute("value", "Read");
  let lbl = document.createElement("label");
  lbl.setAttribute("for", "readCheck");
  lbl.innerHTML = 'Read';

  mainDiv.append(infoDiv);
  infoDiv.append(book);
  infoDiv.append(author);
  infoDiv.append(page);
  mainDiv.append(readDiv);
  readDiv.append(checkbox);
  readDiv.append(lbl);
  mainDiv.append(addDiv);

  mainCont.insertBefore(mainDiv, mainCont.firstChild);

  const addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', () => {
    addBookToLibrary();
    const myNode = document.querySelector(".card");
    myNode.innerHTML = '';
    addValue();
  
  }) 

  Book.prototype = {
    read() {
      if(checkbox.checked === true) {
        checkRead = true;
      } else {
        checkRead = false;
      }
    }
  }
}

function addValue() {
  let name = myLibrary[0].title;
  let author = myLibrary[0].author;
  let page = myLibrary[0].pages;
  const myNode = document.querySelector(".card");
  let content = document.createElement('div');
  content.classList.add("created-card");
  myNode.append(content);
  let nDiv = document.createElement('div');
  let aDiv = document.createElement('div');
  let pDiv = document.createElement('div');
  content.append(nDiv);
  content.append(aDiv);
  content.append(pDiv);

  nDiv.append(name);
  aDiv.append(author);
  pDiv.append(page);

  let lbl = document.createElement("label");
  content.append(lbl);
lbl.classList.add("switch");
let chk = document.createElement("input");
chk.setAttribute("type", "checkbox");
chk.id = "chkBox";
let span = document.createElement("span");
span.classList.add("slider");
span.classList.add("round"); 
lbl.append(chk);
lbl.append(span);

myLibrary[0].read();
if(checkRead) {
  chk.checked = true;
} else {
  chk.checked = false;
}

document.addEventListener('click',function(e){
  if(e.target && e.target.id== 'chkBox'){
    if(chk.checked === true) {
      checkRead = true;
    } else {
      checkRead = false;
    }
   }
});
  
  myLibrary.length = 0;
}








