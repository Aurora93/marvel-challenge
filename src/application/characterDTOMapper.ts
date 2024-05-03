import { getUrl } from "../utils/getUrl";

export interface CharacterDTO {
  characterId: number;
  name: string;
  description: string;
  image: { path: string; extension: string };
  detailUrl: string;
}
interface Thumbnail {
  path: string;
  extension: string;
}

interface Comic {
  resourceURI: string;
  name: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

interface Event {
  resourceURI: string;
  name: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface CharacterDetail {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Comic[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
  };
  urls: Url[];
}

export const characterDTOMapper = (
  data: CharacterDetail[] | any
): CharacterDTO[] => {
  return data.map((character: CharacterDetail) => {
    return {
      characterId: character.id,
      name: character.name,
      description: character.description,
      image: character.thumbnail,
      detailUrl: getUrl(character.urls),
    };
  });
};
