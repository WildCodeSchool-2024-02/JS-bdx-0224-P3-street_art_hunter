const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const PictureSeeder = require("./PictureSeeder");
const UserSeeder = require("./UserSeeder");

class ArtSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "art", truncate: true, dependencies: [PictureSeeder, UserSeeder] });
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    // Generate and insert fake data into the 'item' table
    for (let i = 0; i < 3; i += 1) {
      // Generate fake item data
      const fakeArt = {
        title: this.faker.lorem.word(5), 
        information: this.faker.lorem.sentence(),
        latitude: 44.833328,
        longitude: -0.56667,
        upload_date: this.faker.date.past(),
        status: "draft",
        best_picture: 1,
        user_id: this.getRef(`user_${i}`).insertId, // Get the insertId of the corresponding user from UserSeeder
      };

      this.insert(fakeArt);
    }
  }
}

// Export the ItemSeeder class
module.exports = ArtSeeder;
