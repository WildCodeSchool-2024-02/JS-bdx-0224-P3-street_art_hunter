const AbstractSeeder = require("./AbstractSeeder");

class ArtSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "art", truncate: true });
  }

  run() {
    const arts = [
      {
        title: "Art de l'image 1",
        information:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        latitude: 44.833328,
        longitude: -0.56667,
        upload_date: "2024-06-18",
        status: "checked",
        is_best_picture: 1,
      },
      {
        title: "Art de l'image 2",
        information:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        latitude: 44.987777,
        longitude: -0.57779,
        upload_date: "2024-06-18",
        status: "checked",
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
