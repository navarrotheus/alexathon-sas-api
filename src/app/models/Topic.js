const db = require('../../database/pool');

class Topic {
  async getTopics() {
    const topics = await db.query(
      `select t.id topic_id, t.description topic, t.studied, b.id book_id, b.description book, t.chapter, t.page, d.id discipline_id, d.description discipline from topics t join disciplines d on d.id=t.discipline_id join books b on b.id=t.book_id`
    );

    return topics;
  }

  async getTopicById(id) {
    const topic = await db.query(
      `select t.id topic_id, t.description topic, t.studied, b.id book_id, b.description book, t.chapter, t.page, d.id discipline_id, d.description discipline from topics t join disciplines d on d.id=t.discipline_id join books b on b.id=t.book_id where t.id=${id}`
    );

    return topic;
  }

  async setStudied(id, bool) {
    const topic = await db.query(
      `update topics set studied=${bool} where id=${id} returning id, description, chapter, page, studied`
    );

    return topic;
  }
}

export default new Topic();
