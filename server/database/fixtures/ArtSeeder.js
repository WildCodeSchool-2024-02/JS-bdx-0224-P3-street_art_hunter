const AbstractSeeder = require("./AbstractSeeder");

class ArtSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "art", truncate: true });
  }

  run() {
    const arts = [
      {
        title: null,
        information: null,
        latitude: 44.849304,
        longitude: -0.559219,
        upload_date: "2024-06-20",
        status: "accepted",
        is_best_picture: 1,
      },
      {
        title: null,
        information: null,
        latitude: 44.849861,
        longitude: -0.559792,
        upload_date: "2024-06-20",
        status: "accepted",
        is_best_picture: 1,
      },
      {
        title: null,
        information: null,
        latitude: 44.849247,
        longitude: -0.560797,
        upload_date: "2024-06-20",
        status: "accepted",
        is_best_picture: 1,
      },
      {
        title: null,
        information: null,
        latitude: 44.848892,
        longitude: -0.560161,
        upload_date: "2024-06-20",
        status: "accepted",
        is_best_picture: 1,
      },
      {
        title: null,
        information: null,
        latitude: 44.823360,
        longitude: -0.554785,
        upload_date: "2024-06-20",
        status: "accepted",
        is_best_picture: 1,
      },
    ];

    arts.forEach((art, index) => {
      const artWithRefName = {
        ...art,
        refName: `art_${index}`,
      };
      this.insert(artWithRefName);
    });
  }
}

module.exports = ArtSeeder;
