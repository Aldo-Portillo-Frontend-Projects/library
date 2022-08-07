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

btnSubmit.addEventListener('click', () => {

    let newTableRow = document.createElement('tr');
    let bookName = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    let read = document.createElement('td');

    //Add code to it to add values later for now add dummy values

    //
    bookName.textContent = book2.title;
    author.textContent = book2.author;
    pages.textContent = book2.pages;
    read.textContent = book2.read;


    newTableRow.appendChild(bookName)
    newTableRow.appendChild(author)
    newTableRow.appendChild(pages)
    newTableRow.appendChild(read)
    table.appendChild(newTableRow)
  });