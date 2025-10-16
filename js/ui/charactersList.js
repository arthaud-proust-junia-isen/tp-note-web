const CharacterCard = (character) => {
  const element = document.createElement("div");

  if (character.house) element.classList.add(character.house.toLowerCase());

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = "";

  element.appendChild(img);

  const a = document.createElement("a");
  a.href = "/details.html";
  a.innerText = character.name;

  const p = document.createElement("p");
  p.appendChild(a);

  element.appendChild(p);

  return element;
};

export class CharactersListUi {
  #listEl = document.getElementById("characters-list");
  #housesInputs = document.querySelectorAll('#houses-list input[name="house"]');
  #repository = null;

  constructor(repository) {
    this.#repository = repository;

    this.#housesInputs.forEach((input) => {
      input.addEventListener("change", () => this.renderCharacters());
    });

    this.renderCharacters();
  }

  #getSelectedHouses() {
    const houses = [];

    this.#housesInputs.forEach((input) => {
      if (input.checked) {
        houses.push(input.value);
      }
    });

    return houses;
  }

  renderCharacters() {
    const selectedHouses = this.#getSelectedHouses();
    let characters = selectedHouses.length
      ? this.#repository.getForHouses(selectedHouses)
      : this.#repository.getAll();

    this.#listEl.innerHTML = "";
    characters.forEach((character) => {
      this.#listEl.appendChild(CharacterCard(character));
    });
  }
}
