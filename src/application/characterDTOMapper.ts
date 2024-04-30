export interface CharacterDTO {
  characterId: string;
  name: string;
  description: string;
  image: { path: string; extension: string };
}

export const characterDTOMapper = (data: any): CharacterDTO => ({
  characterId: data.id,
  name: data.name,
  description: data.description,
  image: data.thumbnail,
});
