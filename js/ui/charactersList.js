const CharacterCard = (character) => {
  const element = document.createElement("div");

  element.classList.add(character.house.toLowerCase());

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

  renderCharacters(characters) {
    this.#listEl.innerHTML = "";

    characters.forEach((character) => {
      this.#listEl.appendChild(CharacterCard(character));
    });
  }
}
