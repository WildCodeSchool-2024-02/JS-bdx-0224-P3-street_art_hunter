const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
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
        refName: `user_${i}`, 
      };

      this.insert(fakeUser); 
    }
  }
}

module.exports = UserSeeder;