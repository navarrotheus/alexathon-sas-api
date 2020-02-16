import Topic from '../models/Topic';

class TopicController {
  async index(req, res) {
    const { rows } = await Topic.getTopics();

    return res.json(rows);
  }

  async indexById(req, res) {
    const { id } = req.params;

    const { rows } = await Topic.getTopicById(id);

    return res.json(rows);
  }

  async updateStudied(req, res) {
    const { id, bool } = req.params;

    const { rows } = await Topic.setStudied(id, bool);

    return res.json(rows);
  }
}

export default new TopicController();
