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
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 3; i += 1) {
      // Generate fake user data
      const fakeImage = {
        image: this.faker.image.url(), // Generate a fake password using faker library
        user_id: this.getRef(`user_${i}`).insertId,
        art_id: this.getRef(`art_${i}`).insertId,
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeImage); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = PictureSeeder;