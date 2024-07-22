const AbstractSeeder = require("./AbstractSeeder");
const ArtSeeder = require("./ArtSeeder");
const ArtistSeeder = require("./ArtistSeeder");

class CreatingSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "creating",
      truncate: true,
      dependencies: [ArtSeeder, ArtistSeeder],
    });
  }

  run() {
    const associations = [{}, {}, {}, {}, {}];

    associations.forEach((association, index) => {
      const artRef = this.getRef(`art_fixed_${index}`);
      const artistRef = this.getRef(`artist_${index}`);

      if (!artRef || !artistRef) {
        console.error(`Missing reference for art_${index} or artist_${index}`);
        return;
      }

      const creating = {
        art_id: artRef.insertId,
        artist_id: artistRef.insertId,
      };

      this.insert(creating);
    });
  }
}

module.exports = CreatingSeeder;
