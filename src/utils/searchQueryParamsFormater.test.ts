import { describe, expect, it } from "vitest";
import { searchQueryParamsFormater } from "./searchQueryParamsFormater";

describe("searchQueryParamsFormater", () => {
  it("should return correctly when a search term is passed", () => {
    // Arrange
    const term = "Iron Man";

    // Act
    const result = searchQueryParamsFormater(term);

    // Assert
    expect(result).toEqual({ name: term });
  });

  it("should return correctly when a single character search term is passed", () => {
    // Arrange
    const term = "A";

    // Act
    const result = searchQueryParamsFormater(term);

    // Assert
    expect(result).toEqual({ nameStartsWith: term });
  });

  it("should returns an empty object when no search term is passed", () => {
    // Arrange
    const term = undefined;

    // Act
    const result = searchQueryParamsFormater(term);

    // Assert
    expect(result).toEqual({});
  });
});
