const AbstractRepository = require("./AbstractRepository");

class ArtistRepository extends AbstractRepository {
  constructor() {
    super({ table: "artist" });
  }

  async create(artist) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [artist.name]
    );
    return result.insertId;
  }
}

module.exports = ArtistRepository;
