import CharacterCard from "../CharacterCard";
import { SearchResults } from "./styles";
import { CharacterListProps } from "./types";

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <SearchResults data-testid="search-results">
      {characters.map((character) => (
        <CharacterCard key={character.characterId} character={character} />
      ))}
    </SearchResults>
  );
};

export default CharacterList;
