class BooksService {
  constructor(booksRepository) {
    this.booksRepository = booksRepository;

    this.save = this.save.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  save(book) {
    this.booksRepository.save(book);
  }

  get(id) {
    return this.booksRepository.get(id);
  }

  update(id, book) {
    this.booksRepository.update(id, book);
  }

  delete(id) {
    this.booksRepository.delete(id);
  }
}

module.exports = { BooksService };
