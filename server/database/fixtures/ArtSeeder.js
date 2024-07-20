/* eslint-disable object-shorthand */
const AbstractSeeder = require("./AbstractSeeder");

function getRandomCoordinates(centerLat, centerLng, radius) {
  const y0 = centerLat;
  const x0 = centerLng;
  const rd = radius / 111300;

  const u = Math.random();
  const v = Math.random();

  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  const newLat = y0 + y;
  const newLng = x0 + x;

  return {
    latitude: newLat,
    longitude: newLng,
  };
}

class ArtSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "art", truncate: true });
  }

  run() {
    const centerLat = 44.8333;
    const centerLng = -0.5667;
    const radius = 5000;

    const arts = [
      {
        title: null,
        information: null,
        latitude: 44.849304,
        longitude: -0.559219,
        upload_date: "2024-06-20",
        status: "refused",
      },
      {
        title: null,
        information: null,
        latitude: 44.849861,
        longitude: -0.559792,
        upload_date: "2024-06-20",
        status: "accepted",
      },
      {
        title: null,
        information: null,
        latitude: 44.849247,
        longitude: -0.560797,
        upload_date: "2024-06-20",
        status: "pending",
      },
      {
        title: null,
        information: null,
        latitude: 44.848892,
        longitude: -0.560161,
        upload_date: "2024-06-20",
        status: "pending",
      },
      {
        title: null,
        information: null,
        latitude: 44.82336,
        longitude: -0.554785,
        upload_date: "2024-06-20",
        status: "accepted",
      },
    ];

    arts.forEach((art, index) => {
      const artWithRefName = {
        ...art,
        refName: `art_fixed_${index}`,
      };
      this.insert(artWithRefName);
    });

    for (let i = 0; i < 15; i += 1) {
      const { latitude, longitude } = getRandomCoordinates(
        centerLat,
        centerLng,
        radius
      );
      const fakeArt = {
        title: this.faker.lorem.words(3),
        information: this.faker.lorem.sentence(),
        latitude: latitude,
        longitude: longitude,
        upload_date: this.faker.date.past(),
        status: "pending",
        refName: `art_random_${i}`,
      };

      this.insert(fakeArt);
    }
  }
}

module.exports = ArtSeeder;
