import { useEffect, useState } from "react";
import CharacterList from "../CharacterList";
import SearchBar from "../SearchBar";
import getCharacters from "./../../application/GetCharactersUseCase";
import { CharacterDTO } from "../../application/characterDTOMapper";
import { TextWrapper, SpinnerWrapper } from "./styles";
import SpinnerLoadIcon from "../../assets/icons/spinnerLoadIcon.svg?react";

const CharacterSearch = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterDTO[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCharacterHandler();
  }, []);

  const handleSearch = (term: string) => {
    getCharacterHandler(term);
  };

  const getCharacterHandler = async (term?: string) => {
    setLoading(true);

    const queryParams = { term };

    try {
      const characters = await getCharacters.execute({ queryParams });
      setCharacters(characters);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Name of character" />
      {loading ? (
        <SpinnerWrapper>
          <SpinnerLoadIcon />
        </SpinnerWrapper>
      ) : characters && characters.length > 0 ? (
        <CharacterList characters={characters} />
      ) : (
        <TextWrapper>No search results</TextWrapper>
      )}
      {error && <TextWrapper>Something went wrong</TextWrapper>}
    </div>
  );
};

export default CharacterSearch;
