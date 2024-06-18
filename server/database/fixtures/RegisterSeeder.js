const AbstractSeeder = require("./AbstractSeeder");

class RegisterSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 3; i += 1) {
      const fakeRegister = {
        username: this.faker.internet.userName(),
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        city: this.faker.location.city(),
        zipcode: this.faker.location.zipCode("#####"),
        email: this.faker.internet.email(),
        password: this.faker.internet.password(),
        role: this.faker.animal.type(),
        registration_date: this.faker.date.anytime(),
      };
      this.insert(fakeRegister);
    }
  }
}

module.exports = RegisterSeeder;
