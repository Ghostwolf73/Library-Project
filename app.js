
let books = [];

const $name = document.querySelector("#name");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $pages = document.querySelector("#pages"); 
const $tableBody = document.querySelector("#book-table-body");


function addBookToTable() {
    // checkLocalStorage();
    $tableBody.innerHTML = "";
    books.forEach((book) => {
      const htmlBook = `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td><button class="status-button">${book.status}</button></td>
          <td><button class="delete">delete</button></td>
        </tr>
        `;
      $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
  }

const addBook = (event) => {
    event.preventDefault();
    let book = {
        title: $("#title").val(),
        author: $("#author").val(),
        pages: $("#pages").val(),
        status: $("#status").val(),
    };
    const cb = document.querySelector("#status");

    if (cb.checked === true) {
        book.status = "read";
    } else {
        book.status = "not read";
    }

    books.push(book);

    document.forms[0].reset();
    // Update DOM
    addBookToTable(book);

    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click", function deleteBook(){
        books.splice(books.indexOf(book), 1);
        addBookToTable(book);
    })

    const myBtn = document.querySelector(".status-button");
    myBtn.addEventListener('click', function changeStatus(){
        if (book.status === "read"){
            myBtn.innerHTML="not read"
            book.status = "not read"
        } 
        else if(book.status === "not read"){
            myBtn.innerHTML = "read";
            book.status = "read"
        }
    }
    );


    localStorage.setItem("myMangaList", JSON.stringify(books));
};

function popForm() {
    $("#popup").removeClass("hide");
}

function minimizeForm(){
    $("#popup").addClass("hide");
}

function hideForm() {
    $("#popup").addClass("hide");
    $("#main-page").removeClass("hide");
}

function toggle() {
    $("#main-page").addClass("hide");

}


