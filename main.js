const btnNew = document.querySelector('#button-newBook');
const btnSubmit = document.querySelector('#submit-modal');
const table = document.querySelector('#table');

//Create Object Constructor 

function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
      return `${title} by ${author}, ${pages} pages, ${read ? 'read': 'not read yet'}.`
  }
}

// //Sample Object without using constructor

// let book1 = {
//   title: "42 Laws of Power",
//   author: "Robert Greene",
//   pages: 420,
//   read: true,
// }

// console.log(book1)

//Create Object using constructor

let book2 = new Book("42 Laws of Power", "Robert Greene", 4200, true);

console.log(book2)

//Opens modal
const modal = document.getElementById("myModal");
  
  const span = document.getElementsByClassName("close")[0];
  
  btnNew.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }

  btnSubmit.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  //Now have the submit button create a new object with the inputs

//Button inside the modal
btnSubmit.addEventListener('click', () => {
  //Imports form values

  console.log(document.querySelector("#name").value)
  console.log(document.querySelector("#author").value)
  console.log(document.querySelector("#pages").value)
  console.log(document.querySelector("#read").value)

  //Creates new instance
  let newBook = new Book()

    //calls the values of table to update the table
    let newTableRow = document.createElement('tr');
    let bookName = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    let read = document.createElement('td');

    //
    bookName.textContent = book2.title;
    author.textContent = book2.author;
    pages.textContent = book2.pages;
    read.textContent = book2.read;


    //appends the values
    newTableRow.appendChild(bookName)
    newTableRow.appendChild(author)
    newTableRow.appendChild(pages)
    newTableRow.appendChild(read)
    table.appendChild(newTableRow)
  });