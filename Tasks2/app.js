const express = require("express");
const app = express();
const fs = require("fs");
const port = 3500;
const dataFilePath = "./books.json";

app.use(express.json());

app.get("/books", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.json(books);
});

class BookManager {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
    this.books = this.loadBooks();
  }

  saveBook(book) {
    this.books.push(book);
    this.saveBooks();
  }

  loadBooks() {
    try {
      const data = fs.readFileSync(this.dataFilePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Ошибка при загрузке данных книг", error);
      return [];
    }
  }

  saveBooks() {
    try {
      const data = JSON.stringify(this.books, null, 2);
      fs.writeFileSync(this.dataFilePath, data, "utf8");
      console.log("Данные книг сохранены");
    } catch (error) {
      console.error("Ошибка при сохранении данных книг", error);
    }
  }
}

let books = new BookManager(dataFilePath);

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).send("No title or author");
  }
  const newBook = { id: books.length + 1, title, author };
  books.saveBook(newBook);
  res.status(201).send(newBook);
});


app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("Book not found");
  }
  const { title, author } = req.body;
  book.title = title || author;
  book.author = author || title;
  res.send(book);
});

app.delete("/books/:id", (req, res) => {
  const bookIndex = books.find((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).send("Book not found");
  }

  books.splice(bookIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log("Server run");
});



