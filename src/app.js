const express = require("express");
const { BooksRepository } = require("./repositories/booksRepository");
const { BooksService } = require("./services/booksService");
const { BooksController } = require("./controllers/booksController");
const app = express();
const port = 3500;

const booksRepository = new BooksRepository();
const booksService = new BooksService(booksRepository);
const booksController = new BooksController(booksService);

app.use(express.json());

app.get("/books/:id", booksController.get);
app.post("/books", booksController.save);
app.put("/books/:id", booksController.update);
app.delete("/books/:id", booksController.delete);
app.get("/books/page", booksController.pagination);

app.listen(port, () => console.log(`Server listening on port ${port}.`));
