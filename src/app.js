const express = require("express");
const { BooksRepository } = require("./repositories/BooksRepository");
const { BooksService } = require("./services/BooksService");
const { BooksController } = require("./controllers/BooksController");
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

app.listen(port, () => {
  console.log("Server run");
});
