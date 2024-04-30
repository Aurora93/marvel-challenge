import ICharacterRepository from "../domain/ICharacterRepository";
import { SearchFilters } from "../domain/SearchFilters";
import characterRepository from "../infrastructure/repositories/CharacterRepository";

class GetCharactersUseCase {
  private _repository: ICharacterRepository;

  constructor({ repository }: { repository: ICharacterRepository }) {
    this._repository = repository;
  }

  execute({ queryParams }: { queryParams: SearchFilters }): Promise<any> {
    // TODO type any
    return this._repository.getCharacters({ queryParams });
  }
}

export default new GetCharactersUseCase({
  repository: characterRepository,
});

export { GetCharactersUseCase };
