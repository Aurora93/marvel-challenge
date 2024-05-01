import { CharacterDTO } from "../../application/characterDTOMapper";
import CharacterCard from "../CharacterCard";
import { SearchResults } from "./styles";

const CharacterList = ({ characters }: { characters: CharacterDTO[] }) => {
  return (
    <SearchResults>
      {characters.map((character) => (
        <CharacterCard key={character.characterId} character={character} />
      ))}
    </SearchResults>
  );
};

export default CharacterList;
