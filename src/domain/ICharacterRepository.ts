import {
  CharacterDTO,
  CharacterDetail,
} from "../application/characterDTOMapper";
import { FormatedSearchFilters } from "./SearchFilters";

interface ICharacterRepository {
  getCharacter({
    characterId,
  }: {
    characterId: string;
  }): Promise<CharacterDetail>;
  getCharacters({
    queryParams,
  }: {
    queryParams?: FormatedSearchFilters;
  }): Promise<CharacterDTO[]>;
}

export default ICharacterRepository;
