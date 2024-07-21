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

  async create(picture) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (image, user_id, art_id) VALUES (?, ?, ?)`,
      [picture.image, picture.user_id, picture.art_id]
    );

    return result.insertId;
  }

  async readByUserId(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
    return rows;
  }

  async readByStatus(status) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE status = ?`,
      [status]
    );
    return rows;
  }

  async readByArtId(artId) {
    const [rows] = await this.database.query(
      `SELECT image FROM ${this.table} WHERE art_id = ?`,
      [artId]
    );
    return rows;
  }
}

module.exports = PictureRepository;
