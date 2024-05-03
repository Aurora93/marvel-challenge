import { describe, it, expect } from "vitest";
import { characterDTOMapper } from "./characterDTOMapper";
import {
  charactersFromApi,
  formatedCharacters,
  wrongData,
} from "../test/fixtures/characters";

describe.skip("characterDTOMapper", () => {
  it("should transform data correctly", () => {
    const entranceData = charactersFromApi;

    const expectedResult = formatedCharacters;

    const result = characterDTOMapper(entranceData);

    expect(result).toEqual(expectedResult);
  });

  it("should transform data correctly even if entrance data is not correct", () => {
    const entranceData = wrongData;

    const expectedResult = formatedCharacters;

    const result = characterDTOMapper(entranceData);

    expect(result).toEqual(expectedResult);
  });
});
