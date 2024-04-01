import { FileRepositry } from "./FileRepository.js";
const filePath = "./books.json";

export class BooksRepository {
  constructor() {
    this.fileRepository = new FileRepositry(filePath);
    this.books = this.fileRepository.get();
  }

  save(book) {
    this.books.push(book);
    this.fileRepository.save(this.books);
  }

  get(id) {
    this.books.find((b) => b.id === id);
  }

  update(id, book) {
    const index = this.books.findIndex((b) => b.id === id);
    this.books[index] = book;
    this.fileRepository.save(this.books);
  }

  delete(id) {
    const index = this.books.findIndex((b) => b.id === id);
    this.books.splice(index, 1);
    this.fileRepository.save(this.books);
  }
}
