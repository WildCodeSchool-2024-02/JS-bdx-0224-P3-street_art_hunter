const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
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
      `SELECT ${this.table}.id, ${this.table}.username, ${this.table}.city, ${this.table}.email, p.image FROM ${this.table} LEFT JOIN picture as p ON p.user_id=${this.table}.id`
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


  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set username = ?, city = ?, email = ? where id = ?`,
      [user.username, user.city, user.email, user.id]
    );

    return result.affectedRows;
  }

  async delete(user) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [user.id]
    );

    return result.affectedRows;
  }
}

module.exports = UserRepository;
