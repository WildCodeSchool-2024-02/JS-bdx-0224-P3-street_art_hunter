const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

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
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }
  }
}

module.exports = UserSeeder;
