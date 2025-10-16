import { CharactersRepository } from "./charactersRepository.js";
import { CharactersContainer } from "./ui/CharactersContainer.js";
import { CharactersFilterer } from "./ui/CharactersFilterer.js";
import { CharactersSorter } from "./ui/CharactersSorter.js";
import { HousesFilter } from "./ui/HousesFilter.js";

const charactersRepository = new CharactersRepository();
const charactersContainer = new CharactersContainer();
const housesFilter = new HousesFilter();
const charactersSorter = new CharactersSorter();
const charactersFilterer = new CharactersFilterer();

await charactersRepository.cacheHousesCharacters();

const renderCharacters = () => {
  const selectedHouses = housesFilter.selectedHouses();

  charactersRepository
    .sortBy(charactersSorter.getSortBy())
    .filterBy(charactersFilterer.getFilterBy());

  const characters = selectedHouses.length
    ? charactersRepository.getForHouses(selectedHouses)
    : charactersRepository.getAll();

  charactersContainer.render(characters);
};

housesFilter.onChange(() => renderCharacters());
charactersSorter.onChange(() => renderCharacters());
charactersFilterer.onChange(() => renderCharacters());

renderCharacters();
