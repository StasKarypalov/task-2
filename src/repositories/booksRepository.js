const { FileRepositry } = require("./fileRepository");
const filePath = "./books.json";

class BooksRepository {
  constructor() {
    this.fileRepository = new FileRepositry(filePath);
    this.books = this.fileRepository.get();

    this.save = this.save.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.pagination = this.pagination.bind(this);
  }

  save(book) {
    this.books.push(book);
    this.fileRepository.save(this.books);
  }

  get(id) {
    return this.books.find((b) => b.id === id);
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

  pagination(page,pageSize){
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
  
    const items = this.books.slice(startIndex, endIndex);
    const totalPages = Math.ceil(this.books.length / pageSize);
  
    return {
      items,
      currentPage: page,
      totalPages,
    };
  }
}

module.exports = { BooksRepository };
