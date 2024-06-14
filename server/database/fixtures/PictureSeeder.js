const AbstractSeeder = require("./AbstractSeeder");

class PictureSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "picture", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 3; i += 1) {
      // Generate fake user data
      const fakeImage = {
        image: "https://commons.wikimedia.org/wiki/File:011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?uselang=fr", // Generate a fake password using faker library
        refName: `picture_${i}`, // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeImage); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = PictureSeeder;