const { v4: uuidv4 } = require("uuid");

class BooksController {
  constructor(booksService) {
    this.booksService = booksService;

    this.save = this.save.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.pagination = this.pagination.bind(this);
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

  pagination(req,res){
    const page = parseInt(req.params.page) || 1;
    const pageSize = parseInt(req.params.pageSize) || 5;
    this.booksService.pagination(page, pageSize);
    res.status(204).send();
  }
}

module.exports = { BooksController };
