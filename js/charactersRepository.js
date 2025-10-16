export class CharactersRepository {
  #characters = [];

  #MAX_RESULTS = 12;

  async fetchCharactersOfHouse(house) {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );

    const characters = await response.json();

    return characters.slice(0, this.#MAX_RESULTS);
  }

  async fetchCharacterById(id) {
    const response = await fetch(
      `https://hp-api.onrender.com/api/character/${id}`
    );

    const characters = await response.json();

    return characters[0];
  }

  async cacheHousesCharacters() {
    this.#characters = [
      ...(await this.fetchCharactersOfHouse("gryffindor")),
      ...(await this.fetchCharactersOfHouse("hufflepuff")),
      ...(await this.fetchCharactersOfHouse("ravenclaw")),
      ...(await this.fetchCharactersOfHouse("slytherin")),
    ];
  }

  getAll() {
    return [...this.#characters].slice(0, this.#MAX_RESULTS);
  }

  getForHouses(houses) {
    return this.#characters
      .filter((char) => houses.includes(char.house.toLowerCase()))
      .sort((charA, charB) => charA.name.localeCompare(charB.name))
      .slice(0, this.#MAX_RESULTS);
  }
}
