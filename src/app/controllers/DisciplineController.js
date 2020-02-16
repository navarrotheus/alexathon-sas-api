import Discipline from '../models/Discipline';

class DisciplineController {
  async index(req, res) {
    const { rows } = await Discipline.getDisciplines();

    return res.json(rows);
  }

  async indexById(req, res) {
    const { id } = req.params;

    const { rows } = await Discipline.getDisciplineById(id);

    return res.json(rows);
  }
}

export default new DisciplineController();
