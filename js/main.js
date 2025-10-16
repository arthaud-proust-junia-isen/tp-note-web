import { CharactersRepository } from "./charactersRepository.js";
import { CharactersListUi } from "./ui/charactersList.js";

const charactersRepository = new CharactersRepository();

await charactersRepository.fetchHousesCharacters();

const charactersListUi = new CharactersListUi(charactersRepository);
