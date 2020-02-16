const db = require('../../database/pool');

class Book {
  async getBooks() {
    const books = await db.query(`select id, description from books`);

    return books;
  }

  async getBookById(id) {
    const book = await db.query(
      `select id, description from books where id=${id}`
    );

    return book;
  }
}

export default new Book();
