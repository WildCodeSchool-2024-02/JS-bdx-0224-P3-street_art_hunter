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

  async getTotalArts() {
    const [rows] = await this.database.query(
      `SELECT count(*) as totalArts, sum(CASE WHEN upload_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) THEN 1 ELSE 0 END) AS recentArts FROM ${this.table}`
    );
    return rows[0];
  }

  async create(art) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, description, latitude, longitude, status) VALUES (?, ?, ?, ?, ?)`,
      [art.title, art.description, art.latitude, art.longitude, art.status]
    );

    return result.insertId;
  }
}

module.exports = ArtRepository;
