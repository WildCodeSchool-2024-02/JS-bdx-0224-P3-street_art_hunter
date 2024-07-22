const AbstractSeeder = require("./AbstractSeeder");

class ArtistSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "artist", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeArtist = {
        name: this.faker.person.fullName(),
        refName: `artist_${i}`,
      };

      this.insert(fakeArtist);
    }
  }
}

module.exports = ArtistSeeder;