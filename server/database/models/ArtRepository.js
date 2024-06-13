const AbstractRepository = require("./AbstractRepository");

class ArtRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "art" });
  }

  async readAll() {
    const [rows] = await this.database.query(
    `SELECT ${this.table}.latitude, ${this.table}.longitude, p.image FROM ${this.table} JOIN picture as p ON p.id=${this.table}.picture_id`
    );
    console.info(rows);
    return rows;
  }

}

module.exports = ArtRepository;
