const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

class PendingSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "pending",
      truncate: true,
      dependencies: [UserSeeder],
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const userRefIndex = Math.floor(Math.random() * 10);

      const userRef = this.getRef(`user_${userRefIndex}`);

      if (!userRef) {
        console.error(`Missing reference for user_${i}`);
      }

      const fakePending = {
        image: this.faker.image.urlLoremFlickr(),
        user_id: userRef.insertId,
      };
      this.insert(fakePending);
    }
  }
}

module.exports = PendingSeeder;
