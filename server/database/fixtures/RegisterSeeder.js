const AbstractSeeder = require("./AbstractSeeder");

class RegisterSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 3; i += 1) {
      const fakeRegister = {
        username: this.faker.internet.userName(),
        city: this.faker.location.city(),
        email: this.faker.internet.email(),
        hashed_password: this.faker.internet.password(),
        registration_date: this.faker.date.anytime(),
        is_Admin: i === 2 ? "1" : "0",
      };
      this.insert(fakeRegister);
    }
  }
}

module.exports = RegisterSeeder;
