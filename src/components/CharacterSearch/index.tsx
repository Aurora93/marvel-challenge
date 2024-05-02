import { useEffect, useState } from "react";
import CharacterList from "../CharacterList";
import SearchBar from "../SearchBar";
import Button from "../Button";
import SpinnerLoadIcon from "../../assets/icons/spinnerLoadIcon.svg?react";
import RightArrowIcon from "../../assets/icons/rightArrowIcon.svg?react";
import getCharacters from "./../../application/GetCharactersUseCase";
import { CharacterDTO } from "../../application/characterDTOMapper";
import { TextWrapper, SpinnerWrapper, ButtonWrapper } from "./styles";

const ADDED_NUMBER = 6;

const CharacterSearch = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterDTO[] | null>(null);
  const [term, setTerm] = useState<string | undefined>(undefined);
  const [numberOfResults, setNumberOfResults] = useState(6);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCharacterHandler();
  }, []);

  const handleSearch = (term: string) => {
    getCharacterHandler(term);
  };

  const getCharacterHandler = async (
    term?: string,
    numberOfResults?: number
  ) => {
    setLoading(true);
    setTerm(term);

    const queryParams = { term, numberOfResults };

    try {
      const characters = await getCharacters.execute({ queryParams });
      setCharacters(characters);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setNumberOfResults(numberOfResults + ADDED_NUMBER);
    getCharacterHandler(term, numberOfResults + ADDED_NUMBER);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Name of character" />
      {loading ? (
        <SpinnerWrapper>
          <SpinnerLoadIcon />
        </SpinnerWrapper>
      ) : characters && characters.length > 0 ? (
        <>
          <CharacterList characters={characters} />
          <ButtonWrapper>
            <Button secondary onClick={handleLoadMore}>
              Load more
              <RightArrowIcon />
            </Button>
          </ButtonWrapper>
        </>
      ) : (
        <TextWrapper>No search results</TextWrapper>
      )}

      {error && !characters && <TextWrapper>Something went wrong</TextWrapper>}
    </div>
  );
};

export default CharacterSearch;
