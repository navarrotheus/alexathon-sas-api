const db = require('../../database/pool');

class Discipline {
  async getDisciplines() {
    const disciplines = await db.query(
      `select d.id discipline_id, d.description discipline, a.id area_id, a.description area from disciplines d join areas a on a.id=d.area_id;`
    );

    return disciplines;
  }

  async getDisciplineById(id) {
    const discipline = await db.query(
      `select d.id discipline_id, d.description discipline, a.id area_id, a.description area from disciplines d join areas a on a.id=d.area_id where id=${id}';`
    );

    return discipline;
  }
}

export default new Discipline();
