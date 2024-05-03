import { describe, expect, it } from "vitest";
import { Url } from "../application/characterDTOMapper";
import { getUrl } from "./getUrl";

describe("getUrl function", () => {
  it('returns an empty string if no "comiclink" URL is found', () => {
    const urls = [
      { type: "detail", url: "https://www.marvel.com/characters/hulk" },
      { type: "wiki", url: "https://en.wikipedia.org/wiki/Hulk_(comics)" },
    ];

    const result = getUrl(urls);
    expect(result).toEqual("");
  });

  it('returns the "comiclink" URL if found', () => {
    const urls = [
      { type: "detail", url: "https://www.marvel.com/characters/hulk" },
      { type: "comiclink", url: "https://comicstore.marvel.com/Hulk/1" },
      { type: "wiki", url: "https://en.wikipedia.org/wiki/Hulk_(comics)" },
    ];

    const result = getUrl(urls);
    expect(result).toEqual("https://comicstore.marvel.com/Hulk/1");
  });

  it("returns an empty string if the URLs array is empty", () => {
    const urls: Url[] = [];

    const result = getUrl(urls);
    expect(result).toEqual("");
  });
});
