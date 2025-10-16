import { CharacterCard } from "./CharacterCard.js";

export class CharactersContainer {
  #el = document.getElementById("characters-list");

  render(characters) {
    this.#el.innerHTML = "";

    characters.forEach((character) => {
      this.#el.appendChild(CharacterCard(character));
    });
  }
}
