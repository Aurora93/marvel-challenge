import { describe, it, expect, vi } from "vitest";
import Api from "../../domain/Api";
import { CharacterRepository } from "./CharacterRepository";
import { createMockedApi } from "../../test/mocks/createMockedApi";
import { createMockedApiReject } from "../../test/mocks/createMockedApiReject";
import { charactersFromApi } from "../../test/fixtures/characters";
import { characterDTOMapper } from "../../application/characterDTOMapper";

describe("CharacterRepository", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const testApiBaseUrl = "https://testApiUrl.com/v1";
  const testApiCharacterlEndpoint = "/characters";
  const testApiGetCharacter = testApiBaseUrl + testApiCharacterlEndpoint;

  const name = "Hulk";
  const limit = 6;
  const queryParams = { name, limit };

  const mockedTime = 1234567890;
  Date.prototype.getTime = vi.fn(() => mockedTime);
  const apiKey = "apiKey";

  const errorMessage = "testing error";

  const createRepository = (mockedApi: Api) =>
    new CharacterRepository({
      api: mockedApi,
      getCharacterEndpoint: testApiGetCharacter,
      getCharactersEndpoint: testApiGetCharacter,
    });

  describe("get character details method", () => {
    it("should fetch with correct url and headers and return correct type data", () => {
      const mockedApi = createMockedApi("get", {
        data: { results: charactersFromApi },
      });
      const repository = createRepository(mockedApi);

      const originalGenerateHash =
        CharacterRepository.prototype._createAuthParams;
      CharacterRepository.prototype._createAuthParams = vi
        .fn()
        .mockReturnValue(`?apikey=${apiKey}&ts=${mockedTime}&hash=mockedHash`);

      const expectedUrl = `${testApiGetCharacter}?apikey=${apiKey}&ts=${mockedTime}&hash=mockedHash&name=${name}&limit=${limit}`;
      const getEntriesObject = charactersFromApi;
      const expectedCharacters = characterDTOMapper(getEntriesObject);

      repository
        .getCharacters({
          queryParams,
        })
        .then((response) => {
          expect(mockedApi.get).toHaveBeenNthCalledWith(1, expectedUrl);
          expect(response).toEqual(expectedCharacters);
        });
      CharacterRepository.prototype._createAuthParams = originalGenerateHash;
    });

    it("should return error if fetch returns error", () => {
      const mockedApi = createMockedApiReject("get", errorMessage);
      const repository = createRepository(mockedApi);
      const originalGenerateHash =
        CharacterRepository.prototype._createAuthParams;
      CharacterRepository.prototype._createAuthParams = vi
        .fn()
        .mockReturnValue(`?apikey=${apiKey}&ts=${mockedTime}&hash=mockedHash`);

      const expectedUrl = `${testApiGetCharacter}?apikey=${apiKey}&ts=${mockedTime}&hash=mockedHash&name=${name}&limit=${limit}`;

      repository
        .getCharacters({
          queryParams,
        })
        .catch((err) => {
          expect(mockedApi.get).toHaveBeenNthCalledWith(1, expectedUrl);
          expect(err).not.toBeUndefined();
          expect(err).toEqual(errorMessage);
        });
      CharacterRepository.prototype._createAuthParams = originalGenerateHash;
    });
  });
});
