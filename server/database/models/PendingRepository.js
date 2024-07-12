const AbstractRepository = require("./AbstractRepository");

class PendingRepository extends AbstractRepository {
  constructor() {
    super({ table: "pending" });
  }

  async create(pending) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (image, user_id) VALUES (?, ?)`,
      [pending.image, pending.user_id]
    );

    return result.insertId;
  }
}

module.exports = PendingRepository;
