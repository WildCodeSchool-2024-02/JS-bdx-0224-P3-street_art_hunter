const AbstractRepository = require("./AbstractRepository");

class ArtRepository extends AbstractRepository {
  constructor() {
    super({ table: "art" });
  }

  async readAll() {
    const [rows] = await this.database.query(
    `SELECT ${this.table}.id, ${this.table}.latitude, ${this.table}.longitude, p.image FROM ${this.table} JOIN picture as p ON p.${this.table}_id=art.id`
    );
    return rows;
  }

}

module.exports = ArtRepository;
