import ICharacterRepository from "../domain/ICharacterRepository";
import { SearchFilters } from "../domain/SearchFilters";
import characterRepository from "../infrastructure/repositories/CharacterRepository";
import { CharacterDTO } from "./characterDTOMapper";

class GetCharactersUseCase {
  private _repository: ICharacterRepository;

  constructor({ repository }: { repository: ICharacterRepository }) {
    this._repository = repository;
  }

  execute({
    queryParams,
  }: {
    queryParams: SearchFilters;
  }): Promise<CharacterDTO[]> {
    return this._repository.getCharacters({ queryParams });
  }
}

export default new GetCharactersUseCase({
  repository: characterRepository,
});

export { GetCharactersUseCase };
