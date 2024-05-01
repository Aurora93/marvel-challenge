import { useEffect, useState } from "react";
import CharacterList from "../CharacterList";
import SearchBar from "../SearchBar";
import getCharacters from "./../../application/GetCharactersUseCase";
import { CharacterDTO } from "../../application/characterDTOMapper";
import { TextWrapper } from "./styles";

const CharacterSearch = () => {
  const [characters, setCharacters] = useState<CharacterDTO[] | null>(null);

  useEffect(() => {
    getCharacterHandler();
  }, []);

  const handleSearch = (term: string) => {
    getCharacterHandler(term);
  };

  const getCharacterHandler = async (term?: string) => {
    const queryParams = term // TODO refactor and test
      ? term.length === 1
        ? { nameStartsWith: term }
        : { name: term }
      : {};

    const characters = await getCharacters.execute({ queryParams });
    setCharacters(characters);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Name of character" />
      {characters && <CharacterList characters={characters} />}
      {characters?.length === 0 && <TextWrapper>Sorry, no results</TextWrapper>}
    </div>
  );
};

export default CharacterSearch;
