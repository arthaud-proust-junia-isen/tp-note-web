import { CharactersRepository } from "./charactersRepository.js";
import { CharactersListUi } from "./ui/charactersList.js";

const charactersRepository = new CharactersRepository();
const charactersListUi = new CharactersListUi();

charactersRepository
  .getFirsts(12)
  .then((chars) => charactersListUi.renderCharacters(chars));
