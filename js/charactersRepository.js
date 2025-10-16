export class CharactersRepository {
  #characters = [];

  async getAll() {
    // Cache API call
    if (!this.#characters.length) {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );

      this.#characters = await response.json();
    }

    return [...this.#characters];
  }

  async getFirsts(count) {
    return (await this.getAll()).slice(0, count);
  }
}
