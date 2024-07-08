const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeUser = {
        username: this.faker.lorem.word(2),
        city: this.faker.location.city(),
        zipcode: this.faker.number.int(5),
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
