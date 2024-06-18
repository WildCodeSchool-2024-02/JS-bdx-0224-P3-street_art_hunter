const AbstractRepository = require("./AbstractRepository");

class RegisterRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `
            INSERT INTO ${this.table} (username, email, password, city, zipcode, firstname, lastname)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.username,
        user.email,
        user.password,
        user.city,
        user.zipcode,
        user.firstname,
        user.lastname,
      ]
    );
    return result.insertId;
  }
}

module.exports = RegisterRepository;
