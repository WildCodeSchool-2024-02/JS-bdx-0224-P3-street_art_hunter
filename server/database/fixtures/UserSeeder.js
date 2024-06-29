const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeUser = {
        username: this.faker.internet.userName(),
        city: this.faker.location.city(),
        email: this.faker.internet.email(),
        hashed_password: this.faker.internet.password(),
        is_Admin: i === 2 ? "1" : "0",
        registration_date: this.faker.date.past(),
        refName: `user_${i}`, // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeUser); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
