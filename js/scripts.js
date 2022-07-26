const addButton = document.querySelector(".addIcon");
const delDiv = document.querySelector(".del");
const mainCont = document.querySelector(".main-container");

let checkRead;
let formSuccess = false;

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// add book form if one doesn't exist 

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

// add book object to array, added animation if theres an error

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
  } else if (bookPages.value < 1 || bookPages.value > 10000 ) {
    const inField = document.querySelector("#bookPages");
    inField.value = "";
    inField.placeholder = "Pages has to be more than 0 and less 10000!";
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
  cardHeader.textContent = "ADD A BOOK";
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
  page.setAttribute("min", 1);
  page.setAttribute("max", 10000);
  page.setAttribute("id", "bookPages");
  page.setAttribute("placeholder", "Pages");
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

  // if the form is valid, this replaces the form card with newly created card
  const addBtn = document.querySelector(".addBtn");
  addBtn.addEventListener("click", () => {
    addBookToLibrary();
    if (formSuccess) {
      let card = document.querySelector('.card');
      addValue();
      removeCard(card);
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

// creates an another card with values from the form

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
  let delLink = document.createElement("div");
  delLink.setAttribute("role", "link");
  let sPara = document.createElement("p");
  let iElement = document.createElement('i');
  delLink.id = "del";
  iElement.classList.add('fa', 'fa-times');
  delLink.append(iElement);
  sPara.classList.add('statusLbl');
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

  iElement.addEventListener('click', () => {
    removeCard(content);
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

function toggleBorder(div) {
  if (checkRead == true) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

// change status text

function toggleStatus(element) {
  if (checkRead == true) {
    element.innerHTML = "READ";
    element.style.color = "#4BB543";
  } else {
    element.innerHTML = "IN PROGRESS";
    element.style.color = "#FF7900";
  }
}


function removeCard(node) {
  node.remove();
}

window.onload = () => {
  createInput();
};


//date for footer
const d = new Date();
document.querySelector(".year").innerHTML = d.getFullYear();