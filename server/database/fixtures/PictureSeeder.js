const AbstractSeeder = require("./AbstractSeeder");
const ArtSeeder = require("./ArtSeeder");
const UserSeeder = require("./UserSeeder");

class PictureSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "picture", truncate: true, dependencies: [ArtSeeder, UserSeeder] });
  }

  // The run method - Populate the 'user' table with fake data

  run() {

    const images = [
      {
        image : "/image_1.jpg",
      },
      {
        image : "/image_2.jpg",
      } 
    ];

    images.forEach((image, index) => {
      const imageWithRefName = {
        ...image,
        user_id: this.getRef(`user_${index}`).insertId, 
        art_id: this.getRef(`art_${index}`).insertId,
      };

      this.insert(imageWithRefName);   
    });
    }
}

// Export the UserSeeder class
module.exports = PictureSeeder;