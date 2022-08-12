
let books = [];

function popForm() {
    $("#popup").removeClass("hide");
}

function hideForm() {
    $("#popup").addClass("hide");
    $("#main-page").removeClass("hide");
}

function toggle() {
    $("#main-page").addClass("hide");

}

function addBookToTable(book) {
    let table = document.getElementById("di-books");

    let tr = document.createElement("tr");
    Object.values(book).forEach((value) => {
        let td = document.createElement("td");
        td.innerHTML = value;
        tr.appendChild(td);
    });
    table.appendChild(tr);

}

// then use it in your addBook function 
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
        book.status = "read"
    } else {
        book.status = "not read"
    }
    books.push(book);
    document.forms[0].reset();
    // Update DOM
    addBookToTable(book)
    localStorage.setItem("myMangaList", JSON.stringify(books));
};