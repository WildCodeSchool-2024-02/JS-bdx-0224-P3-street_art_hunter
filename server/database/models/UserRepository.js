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

  // async getUserIdByRefName(refName) {
  //   const [row] = await this.database.query(
  //     `SELECT id FROM ${this.table} WHERE refName = ?`,
  //     [refName]
  //   );
  //   return row ? row.id : null;
  // }
}

module.exports = UserRepository;