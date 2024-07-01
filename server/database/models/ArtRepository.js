const AbstractRepository = require("./AbstractRepository");

class ArtRepository extends AbstractRepository {
  constructor() {
    super({ table: "art" });
  }

  async create(art) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, title, information, latitude, longitude, upload_date, status, best_picture) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        art.id,
        art.title,
        art.information,
        art.latitude,
        art.longitude,
        art.upload_date,
        art.status,
        art.best_picture,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.latitude, ${this.table}.longitude, p.image FROM ${this.table} JOIN picture as p ON p.art_id=${this.table}.id`
    );
    return rows;
  }
}

module.exports = ArtRepository;
