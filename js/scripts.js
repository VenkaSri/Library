const addButton = document.querySelector(".addIcon");
const delDiv = document.querySelector(".del");

// const bTable = document.querySelector('table');
const mainCont = document.querySelector(".main-container");
let checkRead;
let formSuccess = false;

addButton.addEventListener("click", () => {
  if (formSuccess) {
    createInput();
    formSuccess = false;
  } else {
    setTimeout(function () {
      const err = document.querySelector(".errorMsg");
      err.innerHTML = "You can only add one book at a time!";
      err.style.display = "block";
      const myNode = document.querySelector(".card");
      myNode.classList.add("shake");
      setTimeout(function () {
        const myNode = document.querySelector(".card");
        myNode.classList.remove("shake");
      }, 1000);
    }, 0);
  }
});

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  if (
    bookName.value === "" ||
    bookAuthor.value === "" ||
    bookPages.value === ""
  ) {
    const err = document.querySelector(".errorMsg");
    err.innerHTML = "Fill out the fields!";
    err.style.display = "block";
    setTimeout(function () {
      const myNode = document.querySelector(".card");
      myNode.classList.add("shake");
      setTimeout(function () {
        const myNode = document.querySelector(".card");
        myNode.classList.remove("shake");
      }, 1000);
    }, 0);
    formSuccess = false;
  } else {
    myLibrary.push(new Book(bookName.value, bookAuthor.value, bookPages.value));
    formSuccess = true;
  }
}

function hidePopup() {
  const myNode = document.querySelector(".card");
  myNode.classList.add("shake");
}

function deleteClass() {
  const myNode = document.querySelector(".card");
  myNode.classList.remove("shake");
}

//create add book form card
function createInput() {

  let addDiv = document.createElement("div");
  addDiv.classList.add("addBtn");
  addDiv.innerHTML = "Add";
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("card");
  let cardHeader = document.createElement('h2');
  cardHeader.textContent = "Add a book";
  let infoDiv = document.createElement("div");
  infoDiv.classList.add("bookInfo");
  let readDiv = document.createElement("div");
  readDiv.classList.add("bookRead");
  let book = document.createElement("input");
  book.setAttribute("type", "text");
  book.setAttribute("maxlength", 100);
  book.setAttribute("id", "bookName");
  book.setAttribute("placeholder", "Book name");
  book.required = true;
  let author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("maxlength", 40);
  author.setAttribute("id", "bookAuthor");
  author.setAttribute("placeholder", "Author");
  author.required = true;
  let page = document.createElement("input");
  page.setAttribute("type", "number");
  page.setAttribute("max", 10000);
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
  lbl.classList.add("rdLbl");
  lbl.innerHTML = "Read";
  let errorMessage = document.createElement("p");
  errorMessage.classList.add("errorMsg");

  mainDiv.append(cardHeader);
  mainDiv.append(infoDiv);
  infoDiv.append(book);
  infoDiv.append(author);
  infoDiv.append(page);
  infoDiv.append(readDiv);
  infoDiv.append(addDiv);
  mainDiv.append(errorMessage);
  readDiv.append(checkbox);
  readDiv.append(lbl);


  mainCont.insertBefore(mainDiv, mainCont.firstChild);

  const addBtn = document.querySelector(".addBtn");
  addBtn.addEventListener("click", () => {
    addBookToLibrary();
    if (formSuccess) {
      const myNode = document.querySelector(".card");
      myNode.innerHTML = "";
      addValue();
      removeCard();
    }
  });

  Book.prototype = {
    read() {
      if (checkbox.checked === true) {
        checkRead = true;
      } else {
        checkRead = false;
      }
    },
  };
}

function addValue() {
  let name = myLibrary[0].title;
  let author = myLibrary[0].author;
  let page = myLibrary[0].pages;
  let content = document.createElement('div');
  let line = document.createElement('hr');
  content.classList.add("created-card");
  let topDiv = document.createElement("div");
  topDiv.classList.add("topDiv");
  let botDiv = document.createElement("div");
  botDiv.classList.add("botDiv");
  let del = document.createElement("div");
  del.classList.add("del");
  let nDiv = document.createElement("p");
  nDiv.classList.add("bookName");
  let aDiv = document.createElement("div");
  aDiv.classList.add("bookAuthor");
  let pDiv = document.createElement("div");
  pDiv.classList.add("bookPages");
  let delLink = document.createElement("a");
  let sPara = document.createElement("p");
  sPara.classList.add('statusLbl')
  delLink.innerHTML = "Del";
  content.append(del);
  del.append(delLink);
  content.append(topDiv);
  content.append(line);
  content.append(botDiv);
  topDiv.append(nDiv);
  topDiv.append(aDiv);
  topDiv.append(pDiv);
  botDiv.append(sPara);
  sPara.innerHTML = "STATUS";

  nDiv.append(name);
  aDiv.append(author);
  pDiv.append(page + " PAGES");

  let lbl = document.createElement("label");
  botDiv.append(lbl);
  lbl.classList.add("switch");
  let chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  chk.id = "chkBox";
  let span = document.createElement("span");
  span.classList.add("slider");
  span.classList.add("round");
  lbl.append(chk);
  lbl.append(span);
  let statusPara = document.createElement('p');
  statusPara.classList.add("statusPara");
  botDiv.append(statusPara);

  mainCont.insertBefore(content, mainCont.firstChild);


  myLibrary[0].read();
  //displays status/del based what user selects from form 
  if (checkRead) {
    chk.checked = true;
    toggleStatus(statusPara); 
    toggleDel(del);
  } else {
    chk.checked = false;
    toggleStatus(statusPara); 
    toggleDel(del);
  }

  //change status/del based what user selects after book card has been created 
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id == "chkBox") {
      if (chk.checked === true) {
        checkRead = true;
        toggleStatus(statusPara); 
        toggleDel(del);
      } else {
        checkRead = false;
        toggleStatus(statusPara); 
        toggleDel(del);
      }
    }
  });

  myLibrary.length = 0;
}

function toggleDel(div) {
  if (checkRead == true) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function toggleStatus(element) {
  if (checkRead == true) {
    element.innerHTML = "READ";
  } else {
    element.innerHTML = "IN PROGRESS";
  }
}

window.onload = () => {
  createInput();
};

function removeCard() {
  const myNode = document.querySelector(".card");
  myNode.remove();
}

const d = new Date();
document.querySelector(".year").innerHTML = d.getFullYear();
