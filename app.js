
let books = [];

const $name = document.querySelector("#title");
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
          <td><button class="status-button" onclick="changeStatus('${book.id}')">${book.status}</button></td>
          <td><button class="delete" onclick="deleteBook('${book.id}')">delete</button></td>
        </tr>
        `;
        $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
}

function changeStatus(id) {
    let book = books.filter(book => book.id === id)[0];

    if (book.status === "read") {
        book.status = "not read";
    }
    else if (book.status === "not read") {
        book.status = "read";
    }
    addBookToTable();
}


function deleteBook(id) {
    const result = confirm("Are you sure you want to delete?");
    if (result == true) {
        let book = books.filter(book => book.id === id)[0];
        books.splice(book, 1);
        addBookToTable(book);
    } else {
        return false;
    }

}

const addBook = (event) => {
    event.preventDefault();
    let book = {
        title: $("#title").val(),
        author: $("#author").val(),
        pages: $("#pages").val(),
        status: $("#status").val(),
        id: Math.random().toString(16).slice(2)
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

    localStorage.setItem("myMangaList", JSON.stringify(books));
};



function popForm() {
    $("#popup").removeClass("hide");
}

function minimizeForm() {
    $("#popup").addClass("hide");
}

function hideForm() {
    $("#popup").addClass("hide");
    $("#main-page").removeClass("hide");
}

function toggle() {
    $("#main-page").addClass("hide");

}


