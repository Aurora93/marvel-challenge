import { SearchFilters } from "./SearchFilters";

interface ICharacterRepository {
  getCharacter({ characterId }: { characterId: string }): Promise<any>; // TODO any
  getCharacters({ queryParams }: { queryParams: SearchFilters }): Promise<any>; // TODO any
}

export default ICharacterRepository;
