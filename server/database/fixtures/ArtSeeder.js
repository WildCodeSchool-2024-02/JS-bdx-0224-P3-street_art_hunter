const AbstractSeeder = require("./AbstractSeeder");

class ArtSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "art", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeArt = {
        title: this.faker.lorem.words(3),
        information: this.faker.lorem.sentence(),
        latitude: this.faker.location.latitude(),
        longitude: this.faker.location.longitude(),
        upload_date: this.faker.date.past(),
        status: "pending",
        is_best_picture: false,
        refName: `art_${i}`,
      };

      this.insert(fakeArt);
    }
  }
}

module.exports = ArtSeeder;
