import { CharactersRepository } from "./charactersRepository.js";

const charactersRepository = new CharactersRepository();

const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

const character = await charactersRepository.fetchCharacterById(characterId);

window.document.title = `Arthaud PROUST - ${character.name}`;

document
  .querySelectorAll(".perso__name")
  .forEach((el) => (el.innerText = character.name));

document.querySelector(".perso__img").src = character.image;

document.querySelector(".perso__gender").innerText = character.gender;

document.querySelector(".perso__hair").innerText = character.hairColour;

document.querySelector(".perso__eye").innerText = character.eyeColour;

document.querySelector(".perso__birthdate").innerText = character.dateOfBirth;

document.querySelector(".perso__patronus").innerText = character.patronus;
