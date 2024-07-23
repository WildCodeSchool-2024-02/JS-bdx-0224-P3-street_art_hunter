const AbstractRepository = require("./AbstractRepository");
const PictureRepository = require("./PictureRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
    this.pictureRepository = new PictureRepository();
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password, username, city) VALUES (?, ?, ?, ?)`,
      [user.email, user.hashedPassword, user.username, user.city]
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.id, ${this.table}.username, ${this.table}.city, ${this.table}.zipcode, ${this.table}.email, ${this.table}.point_number, ${this.table}.is_Admin, ${this.table}.registration_date FROM ${this.table}`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return rows[0];
  }

  async getTotalUsers() {
    const [rows] = await this.database.query(
      `SELECT count(*) as totalUsers, sum(CASE WHEN registration_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) THEN 1 ELSE 0 END) AS recentUsers FROM ${this.table}`
    );
    return rows[0];
  }

  async getRanking() {
    const [rows] = await this.database.query(
      `SELECT id, username, point_number FROM ${this.table} ORDER BY point_number DESC`
    );
    return rows;
  }

  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set username = ?, city = ?, email = ? where id = ?`,
      [user.username, user.city, user.email, user.id]
    );

    return result.affectedRows;
  }

  async updatePoints({ pointNumber, artId }) {
    const [result] = await this.database.query(
      `update ${this.table} join picture as p on ${this.table}.id = p.user_id set  ${this.table}.point_number =  ${this.table}.point_number + ? where p.art_id = ?`,
      [pointNumber, artId]
    );

    return result.affectedRows;
  }

  async delete(userId) {
    await this.pictureRepository.deleteByUserId(userId);
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [userId]
    );
    return result.affectedRows;
  }
}

module.exports = UserRepository;
