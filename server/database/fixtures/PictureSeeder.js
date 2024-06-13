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
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faltinnov.blog%2Findex.php%2Fen%2F2022%2F10%2F24%2Fminiature-street-art%2F&psig=AOvVaw0KviHyzxIcfcv4cdYUQpzV&ust=1718363672280000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCPk9S52IYDFQAAAAAdAAAAABAE", // Generate a fake password using faker library
        refName: `picture_${i}`, // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeImage); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = PictureSeeder;