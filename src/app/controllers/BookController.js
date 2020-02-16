import Book from '../models/Book';

class BookController {
  async index(req, res) {
    const { rows } = await Book.getBooks();

    return res.json(rows);
  }

  async indexById(req, res) {
    const { id } = req.params;

    const { rows } = await Book.getBookById(id);

    return res.json(rows);
  }
}

export default new BookController();
