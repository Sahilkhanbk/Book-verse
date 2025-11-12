const form = document.querySelector(".form-container")
const results = document.querySelector(".bookList")
let books = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {
    results.innerHTML = "";
    books.forEach((book, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <strong>${book.book}</strong> by ${book.Auther} genre is ${book.Genre}\n
        <button onclick="deleteBook(${index})" style="margin-left:9rem;" >delete</button>
`;
        results.appendChild(div);
    })

};
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const book = document.querySelector(".bookname").value.trim();
    const Auther = document.querySelector(".Auther").value.trim();
    const Genre = document.querySelector(".Genre").value.trim();

    if (book && Auther && Genre) {
        const newBook = { book, Auther, Genre };
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
        displayBooks();
        form.reset();
    }
})
function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}
displayBooks()
























