export class BooksService {
  constructor(booksRepository) {
    this.booksRepository = booksRepository;
  }

  save(book) {
    this.booksRepository.save(book);
  }

  get(id) {
    this.booksRepository.get(id);
  }

  update(id, book) {
    this.booksRepository.update(id, book);
  }

  delete(id) {
    this.booksRepository.delete(id);
  }
}
