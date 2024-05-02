import { describe, expect, it } from "vitest";
import { searchQueryParamsFormater } from "./searchQueryParamsFormater";

describe("searchQueryParamsFormater", () => {
  it("should return correctly when a search term is passed", () => {
    // Arrange
    const term = "Iron Man";
    const filters = { term };

    // Act
    const result = searchQueryParamsFormater(filters);

    // Assert
    expect(result).toEqual({ name: term, limit: 6 });
  });

  it("should return correctly when a single character search term is passed", () => {
    // Arrange
    const term = "A";
    const filters = { term };

    // Act
    const result = searchQueryParamsFormater(filters);

    // Assert
    expect(result).toEqual({ nameStartsWith: term, limit: 6 });
  });

  it("should returns an empty object when no search term is passed", () => {
    // Arrange
    const term = undefined;
    const filters = { term };

    // Act
    const result = searchQueryParamsFormater(filters);

    // Assert
    expect(result).toEqual({ limit: 6 });
  });
});
