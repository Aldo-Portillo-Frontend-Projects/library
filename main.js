const btn = document.querySelector('#button-newBook');
const table = document.querySelector('#table')

btn.addEventListener('click', () => {

    let newTableRow = document.createElement('tr');
    let bookName = document.createElement('td');
    let author = document.createElement('td');
    let pages = document.createElement('td');
    let read = document.createElement('td');

    //Add code to it to add values later for now add dummy values

    //
    bookName.textContent = "42 Laws of Power";
    author.textContent = "Robert Green";
    pages.textContent = "420";
    read.textContent = "true";


    newTableRow.appendChild(bookName)
    newTableRow.appendChild(author)
    newTableRow.appendChild(pages)
    newTableRow.appendChild(read)
    table.appendChild(newTableRow)
  });

  const modal = document.getElementById("myModal");
  
  const span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }