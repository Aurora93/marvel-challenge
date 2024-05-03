import { render, fireEvent } from "@testing-library/react";
import CharacterCard from "./";
import { describe, it, expect, vi } from "vitest";

describe("CharacterCard", () => {
  const character = {
    name: "Iron Man",
    description: "Genius, billionaire, philanthropist",
    detailUrl: "https://example.com/ironman",
    image: {
      path: "ironman",
      extension: "jpg",
    },
    characterId: 1,
  };

  it("renders character card with correct content", () => {
    const { getByTestId, getByText } = render(
      <CharacterCard character={character} />
    );

    // Assert
    const card = getByTestId("character-card");
    expect(card).toBeDefined();

    const characterName = getByText(character.name);
    expect(characterName).toBeDefined();

    const characterDescription = getByText(character.description);
    expect(characterDescription).toBeDefined();

    const characterImage = getByTestId("character-image");
    expect(characterImage).toBeTruthy();
  });

  it('opens detail URL in new tab when "Read more" button is clicked', () => {
    // Mock window.open
    const originalOpen = window.open;
    window.open = vi.fn();

    const { getByRole } = render(<CharacterCard character={character} />);
    const readMoreButton = getByRole("button", { name: /Read more/ });

    // Simulate button click
    fireEvent.click(readMoreButton);

    // Assert
    expect(window.open).toHaveBeenCalledWith(
      "https://example.com/ironman",
      "_blank"
    );

    // Restore window.open
    window.open = originalOpen;
  });
});
