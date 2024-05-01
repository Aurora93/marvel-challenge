import { useState } from "react";
import CharacterList from "../CharacterList";
import SearchBar from "../SearchBar";
import getCharacters from "./../../application/GetCharactersUseCase";
import { CharacterDTO } from "../../application/characterDTOMapper";

const CharacterSearch = () => {
  const [characters, setCharacters] = useState<CharacterDTO[]>([]);
  const handleSearch = (term: string) => {
    getCharacter(term);
  };

  const getCharacter = async (term: string) => {
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
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharacterSearch;
