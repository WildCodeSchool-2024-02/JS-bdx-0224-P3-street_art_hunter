const AbstractRepository = require("./AbstractRepository");

class RegisterRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `
            INSERT INTO ${this.table} (username, email, password, city, isAdmin)
            VALUES (?, ?, ?, ?, ?)`,
      [user.username, user.email, user.password, user.city, user.isAdmin]
    );
    return result.insertId;
  }
}

module.exports = RegisterRepository;
