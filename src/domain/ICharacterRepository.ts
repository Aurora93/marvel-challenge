import { CharacterDTO } from "../application/characterDTOMapper";
import { FormatedSearchFilters } from "./SearchFilters";

interface ICharacterRepository {
  getCharacter({ characterId }: { characterId: string }): Promise<any>; // TODO any
  getCharacters({
    queryParams,
  }: {
    queryParams?: FormatedSearchFilters;
  }): Promise<CharacterDTO[]>;
}

export default ICharacterRepository;
