import { useState } from "react";
import CharacterList from "../CharacterList";
import SearchBar from "../SearchBar";
import getCharacters from "./../../application/GetCharactersUseCase";
import { CharacterDTO } from "../../application/characterDTOMapper";
import { TextWrapper } from "./styles";

const CharacterSearch = () => {
  const [characters, setCharacters] = useState<CharacterDTO[] | null>(null);
  const handleSearch = (term: string) => {
    getCharacter(term);
  };

  const getCharacter = async (term: string) => {
    if (term.length === 1) {
      // TODO refactor
      const characters = await getCharacters.execute({
        queryParams: {
          nameStartsWith: term,
        },
      });
      setCharacters(characters);
      return;
    }

    const characters = await getCharacters.execute({
      queryParams: {
        name: term,
      },
    });
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
