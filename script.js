document.addEventListener("DOMContentLoaded", loadBooks);

function loadBooks() {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    try {
        let books = JSON.parse(localStorage.getItem("books")) || [];

        books.forEach((book) => {
            let bookItem = document.createElement("div");
            bookItem.className = "book-item";
            bookItem.setAttribute("data-id", book.id); // Identificador único

            let strong = document.createElement("strong");
            strong.textContent = book.title;

            let priceText = document.createTextNode(` - R$ ${(Number(book.price) || 0).toFixed(2)}`);

            let removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.onclick = function () {
                removeBook(book.id);
            };

            bookItem.appendChild(strong);
            bookItem.appendChild(priceText);
            bookItem.appendChild(removeButton);
            bookList.appendChild(bookItem);
        });
    } catch (error) {
        console.error("Erro ao carregar os livros:", error);
        alert("Erro ao carregar a lista de livros.");
    }
}
