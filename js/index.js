import { CharactersRepository } from "./charactersRepository.js";
import { CharactersContainer } from "./ui/CharactersContainer.js";
import { HousesFilter } from "./ui/HousesFilter.js";

const charactersRepository = new CharactersRepository();
const charactersContainer = new CharactersContainer();
const housesFilter = new HousesFilter();

await charactersRepository.cacheHousesCharacters();

const renderCharacters = () => {
  const selectedHouses = housesFilter.selectedHouses();

  const characters = selectedHouses.length
    ? charactersRepository.getForHouses(selectedHouses)
    : charactersRepository.getAll();

  charactersContainer.render(characters);
};

housesFilter.onChange(() => renderCharacters());
renderCharacters();
