const AbstractSeeder = require("./AbstractSeeder");

class CreatingSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "creating", truncate: true });
  }

  run() {
    const associations = [{}, {}, {}, {}, {}];

    associations.forEach((association, index) => {
      const creating = {
        ...association,
        art_id: this.getRef(`art_${index}`).insertId,
        artist_id: this.getRef(`artist_${index}`).insertId,
      };

      this.insert(creating);
    });
  }
}

module.exports = CreatingSeeder;
