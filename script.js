const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

function isValidBook(book) {
    return book.author && book.name && book.price !== undefined;
}

function createBookList(books) {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        console.error("Element with id 'root' not found on the page.");
        return;
    }

    const ul = document.createElement("ul");

    books.forEach((book) => {
        if (isValidBook(book)) {
            const li = document.createElement("li");
            li.textContent = `Author: ${book.author}, Name: ${book.name}, Price: ${book.price}`;
            ul.appendChild(li);
        } else {
            console.error(`Invalid book object: ${JSON.stringify(book)}`);
        }
    });

    rootElement.appendChild(ul);
}

createBookList(books);
