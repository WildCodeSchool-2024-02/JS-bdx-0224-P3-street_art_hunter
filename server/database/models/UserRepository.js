const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
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

  async update(user) {
    const [result] = await this.database.query(
      `update ${this.table} set username = ?, city = ?, email = ? where id = ?`,
      [user.username, user.city, user.email, user.id]
    );

    return result.affectedRows;
  }
  
}

module.exports = UserRepository;
