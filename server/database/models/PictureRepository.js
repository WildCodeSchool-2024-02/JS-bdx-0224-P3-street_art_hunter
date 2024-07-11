const AbstractRepository = require("./AbstractRepository");

class PictureRepository extends AbstractRepository {
  constructor() {
    super({ table: "picture" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT image FROM ${this.table} WHERE user_id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = PictureRepository;