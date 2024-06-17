const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 3; i += 1) {
      // Generate fake user data
      const fakeUser = {
        username: this.faker.lorem.word(2), 
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        city: this.faker.location.city(),
        zipcode: this.faker.number.int(5),
        email: this.faker.internet.email(),
        password: this.faker.internet.password(),
        role: i === 2 ? 'admin' : 'user',
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