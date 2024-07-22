const AbstractRepository = require("./AbstractRepository");

class ArtRepository extends AbstractRepository {
  constructor() {
    super({ table: "art" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.id, ${this.table}.latitude, ${this.table}.longitude, ${this.table}.title, ${this.table}.information, p.image FROM ${this.table} JOIN picture as p ON p.art_id=art.id`
    );
    return rows;
  }

  async readAccepted() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.id, ${this.table}.latitude, ${this.table}.longitude, ${this.table}.title, ${this.table}.information, p.image FROM ${this.table} JOIN picture as p ON p.art_id=art.id WHERE ${this.table}.status = 'accepted'`
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
      `INSERT INTO ${this.table} (title, information, latitude, longitude, status) VALUES (?, ?, ?, ?, ?)`,
      [art.title, art.information, art.latitude, art.longitude, art.status]
    );

    return result.insertId;
  }

  async readComparedArts() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.*, p.id as picture_id, p.image, u.username, a.name as artist_name FROM ${this.table} JOIN picture as p ON p.art_id=${this.table}.id JOIN user as u ON p.user_id = u.id LEFT JOIN 
      creating as c ON c.art_id = ${this.table}.id LEFT JOIN artist as a ON a.id = c.artist_id WHERE ${this.table}.status != 'refused'`
    );
    return rows;
  }

  async update(art, id) {
    const [result] = await this.database.query(
      `update ${this.table} set status = ? where id = ?`,
      [art.status, id]
    );
    return result.affectedRows;
  }
}

module.exports = ArtRepository;
