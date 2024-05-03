import { render } from "@testing-library/react";
import CharacterList from ".";
import { describe, expect, it } from "vitest";

describe("CharacterList", () => {
  it("renders a list of characters correctly", () => {
    const characters = [
      {
        characterId: 1,
        name: "Iron Man",
        description: "Genius, billionaire, playboy, philanthropist",
        detailUrl: "https://example.com/ironman",
        image: {
          path: "ironman",
          extension: "jpg",
        },
      },
      {
        characterId: 2,
        name: "Captain America",
        description: "Super soldier and leader of the Avengers",
        detailUrl: "https://example.com/captainamerica",
        image: {
          path: "captainamerica",
          extension: "jpg",
        },
      },
    ];

    const { getByTestId, getAllByTestId } = render(
      <CharacterList characters={characters} />
    );

    // Assert
    const searchResults = getByTestId("search-results");
    expect(searchResults).toBeDefined();

    const characterCards = getAllByTestId("character-card");
    expect(characterCards.length).toBe(characters.length);
  });
});
