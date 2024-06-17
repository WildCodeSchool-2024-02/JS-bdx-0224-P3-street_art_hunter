const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

class ArtSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "art", truncate: true});
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    // Generate and insert fake data into the 'item' table
    for (let i = 0; i < 3; i += 1) {
      // Generate fake item data
      const fakeArt = {
        title: this.faker.lorem.word(5), 
        information: this.faker.lorem.sentence(),
        latitude: this.faker.location.latitude(),
        longitude: this.faker.location.longitude(),
        upload_date: this.faker.date.past(),
        status: "draft",
        best_picture: 1,
        refName: `art_${i}`
      };

      this.insert(fakeArt);
    }
  }
}

// Export the ItemSeeder class
module.exports = ArtSeeder;
