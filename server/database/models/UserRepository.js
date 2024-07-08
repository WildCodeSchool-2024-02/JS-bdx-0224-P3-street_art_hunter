const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async getUserIdByRefName(refName) {
    const [row] = await this.database.query(
      `SELECT id FROM ${this.table} WHERE refName = ?`,
      [refName]
    );
    return row ? row.id : null;
  }
}

module.exports = UserRepository;