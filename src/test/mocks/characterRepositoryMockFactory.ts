import { vi } from "vitest";

export const characterRepositoryMockFactory = (
  method: "getCharacter" | "getCharacters",
  implementation: object
) => ({
  getCharacter:
    method === "getCharacter"
      ? vi.fn().mockReturnValue(implementation)
      : () => Promise.reject(),
  getCharacters:
    method === "getCharacters"
      ? vi.fn().mockReturnValue(implementation)
      : () => Promise.reject(),
});
