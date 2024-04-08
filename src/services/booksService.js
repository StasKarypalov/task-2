class BooksService {
  constructor(booksRepository) {
    this.booksRepository = booksRepository;

    this.save = this.save.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.pagination = this.pagination.bind(this);
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

  pagination(page,pageSize){
    return this.booksRepository.pagination(page,pageSize);
  }
}

module.exports = { BooksService };
