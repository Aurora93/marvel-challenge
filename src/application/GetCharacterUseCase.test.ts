import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import ICharacterRepository from "../domain/ICharacterRepository";
import { characterRepositoryMockFactory } from "../test/mocks/characterRepositoryMockFactory";
import { GetCharactersUseCase } from "./GetCharactersUseCase";
import { getCharacterResponse } from "../test/fixtures/characters";
import { CharacterDTO } from "./characterDTOMapper";

describe("GetCharactersUseCase", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const createUseCase = (mockedRepository: ICharacterRepository) =>
    new GetCharactersUseCase({
      repository: mockedRepository,
    });

  const errorMessage = "GetCharactersUseCase test error";
  const term = "Hulk";
  const numberOfResults = 6;
  const queryParams = { term, numberOfResults };

  it("should call the repository and return correct data type", () => {
    const mockedRepository = characterRepositoryMockFactory(
      "getCharacters",
      Promise.resolve(getCharacterResponse)
    );
    const useCase = createUseCase(mockedRepository);
    const term = "Hulk";
    const numberOfResults = 6;
    const queryParams = { term, numberOfResults };

    return useCase.execute({ queryParams }).then((response) => {
      expect(mockedRepository.getCharacters).toHaveBeenCalledTimes(1);
      expect(response).toBeInstanceOf(Array);
      response.forEach((character) => {
        expectTypeOf({ character }).toEqualTypeOf<{
          character: CharacterDTO;
        }>();
      });
    });
  });

  it("should return error if the api returns error", () => {
    const mockedRepository = characterRepositoryMockFactory(
      "getCharacters",
      Promise.reject(errorMessage)
    );
    const useCase = createUseCase(mockedRepository);

    return useCase.execute({ queryParams }).catch((error: Error) => {
      expect(mockedRepository.getCharacters).toHaveBeenCalledTimes(1);
      expect(error).not.toBe(undefined);
      expect(error).toEqual(errorMessage);
    });
  });
});
