import { useState } from "react";
import CharacterList from "../CharacterList";
import SearchBar from "../SearchBar";
import Button from "../Button";
import SpinnerLoadIcon from "../../assets/icons/spinnerLoadIcon.svg?react";
import RightArrowIcon from "../../assets/icons/rightArrowIcon.svg?react";
import getCharacters from "./../../application/GetCharactersUseCase";
import { CharacterDTO } from "../../application/characterDTOMapper";
import { TextWrapper, SpinnerWrapper, ButtonWrapper } from "./styles";
import { useEffectOnce } from "../../utils/useEffectOnce";

const ADDED_NUMBER = 6;

const CharacterSearch = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterDTO[] | null>(null);
  const [term, setTerm] = useState<string | undefined>(undefined);
  const [numberOfResults, setNumberOfResults] = useState(6);
  const [error, setError] = useState(false);

  useEffectOnce(() => {
    getCharacterHandler();
  });
  const handleSearch = (term: string) => {
    getCharacterHandler(term);
  };

  const getCharacterHandler = async (
    term?: string,
    numberOfResults?: number
  ) => {
    setLoading(true);
    setTerm(term);
    console.log("hola");

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
    <>
      <SearchBar onSearch={handleSearch} placeholder="Name of character" />
      {loading ? (
        <SpinnerWrapper data-testid="spinner-wrapper">
          <SpinnerLoadIcon />
        </SpinnerWrapper>
      ) : characters && characters.length > 0 ? (
        <>
          <CharacterList data-testid="character-list" characters={characters} />
          <ButtonWrapper>
            <Button
              variable="secondary"
              onClick={handleLoadMore}
              data-testid="loadmore-button"
            >
              Load more
              <RightArrowIcon />
            </Button>
          </ButtonWrapper>
        </>
      ) : error ? (
        <TextWrapper data-testid="error-message">
          Something went wrong
        </TextWrapper>
      ) : (
        <TextWrapper data-testid="no-results-message">
          No search results
        </TextWrapper>
      )}
    </>
  );
};

export default CharacterSearch;
