const db = require('../../database/pool');

class Area {
  async getAreas() {
    const areas = await db.query(`select id, description from areas`);

    return areas;
  }

  async getAreaById(id) {
    const area = await db.query(
      `select id, description from areas where id=${id}`
    );

    return area;
  }
}

export default new Area();
