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
    const images = [
      { image: "/image_1.jpg" },
      { image: "/image_2.jpg" },
      { image: "/image_3.jpg" },
      { image: "/image_4.jpg" },
      { image: "/image_5.jpg" },
    ];

    images.forEach((image, index) => {
      const userRef = this.getRef(`user_${index}`);
      const artRef = this.getRef(`art_fixed_${index}`);

      if (!userRef || !artRef) {
        console.error(
          `Missing reference for user_${index} or art_fixed_${index}`
        );
        return;
      }

      const imageWithRefName = {
        ...image,
        user_id: userRef.insertId,
        art_id: artRef.insertId,
      };

      this.insert(imageWithRefName);
    });
  }
}

module.exports = PictureSeeder;
