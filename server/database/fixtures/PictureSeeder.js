const AbstractSeeder = require("./AbstractSeeder");
const ArtSeeder = require("./ArtSeeder");
const UserSeeder = require("./UserSeeder");

class PictureSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "picture",
      truncate: true,
      dependencies: [ArtSeeder, UserSeeder],
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const userRefIndex = Math.floor(Math.random() * 10);
      const artRefIndex = Math.floor(Math.random() * 10);

      const userRef = this.getRef(`user_${userRefIndex}`);
      const artRef = this.getRef(`art_${artRefIndex}`);

      const fakePicture = {
        image: this.faker.image.urlLoremFlickr(),
        user_id: userRef.insertId,
        art_id: artRef.insertId,
        latitude: this.faker.location.latitude(),
        longitude: this.faker.location.longitude(),
        status: "pending",
        upload_date: new Date(),
      };

      this.insert(fakePicture);
    }
  }
}

module.exports = PictureSeeder;
