const superHeroes = require('./super-heroes.json');

const getDCHeroes = (heroes) => {
  return heroes.filter((hero) => hero.publisher == 'DC Comics');
};

const convertCharactersToArray = (heroes) => {
  return heroes.map((hero) => {
    return {
      ...hero,
      characters: hero.characters.split(',').map((character) => character),
    };
  });
};

const groupByPublisher = (heroes) => {
  return heroes.reduce(
    (publishers, hero) => ({
      ...publishers,
      [hero['publisher']]: [...(publishers[hero['publisher']] || []), hero],
    }),
    {}
  );
};


const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  return heroes.filter((hero) => {
    return (
      hero.publisher == 'DC Comics' && hero.characters.split(', ').length > 1
    );
  });
};

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
};
