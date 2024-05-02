import CharacterCard from "../CharacterCard";
import { SearchResults } from "./styles";
import { Button } from "../Button";
import RightArrowIcon from "../../assets/icons/rightArrowIcon.svg?react";
import { CharacterListProps } from "./types";

const CharacterList = ({ characters, loadMore }: CharacterListProps) => {
  return (
    <SearchResults>
      {characters.map((character) => (
        <CharacterCard key={character.characterId} character={character} />
      ))}
      <Button secondary onClick={loadMore}>
        Load more
        <RightArrowIcon />
      </Button>
    </SearchResults>
  );
};

export default CharacterList;
