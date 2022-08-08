let myLibrary = [];

class Book {
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }


}

var bookOne = new Book('Naruto', 'Kishimoto', 98, true);
var bookTWo = new Book('One Piece', 'Oda', 300, false);

function addBookToLibrary() {
    // const newBook = new Book($title.title, $author.author, $pages.pages, $status.status);
    // myLibrary.push(newBook);
    myLibrary.push(bookOne, bookTWo);
    console.log(myLibrary)
}

addBookToLibrary();



