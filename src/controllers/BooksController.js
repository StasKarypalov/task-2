const { v4: uuidv4 } = require("uuid");

export class BooksController {
  constructor(booksService) {
    this.booksService = booksService;
  }

  save(req, res) {
    const { title, author } = req.body;
    this.booksService.save({ id: uuidv4(), title, author });
    res.sendStatus(201);
  }

  get(req, res) {
    const id = req.params.id;
    const book = this.booksService.get(id);
    if (!book) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send(book);
  }

  update(req, res) {
    const id = req.params.id;
    const book = this.booksService.get(id);
    if (!book) {
      return res.status(404).send("Book not found");
    }

    const { title, author } = req.body;
    this.booksService.update(id, { title, author });
    res.status(200).send({ id, title, author });
  }

  delete(req, res) {
    const id = req.params.id;
    this.booksService.delete(id);

    res.status(204).send();
  }
}
