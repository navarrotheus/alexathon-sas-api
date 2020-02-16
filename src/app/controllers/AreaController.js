import Area from '../models/Area';

class AreaController {
  async index(req, res) {
    const { rows } = await Area.getAreas();

    return res.json(rows);
  }

  async indexById(req, res) {
    const { id } = req.params;

    const { rows } = await Area.getAreaById(id);

    return res.json(rows);
  }
}

export default new AreaController();
