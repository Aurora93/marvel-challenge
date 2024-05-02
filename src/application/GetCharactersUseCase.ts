import ICharacterRepository from "../domain/ICharacterRepository";
import { SearchFilters } from "../domain/SearchFilters";
import characterRepository from "../infrastructure/repositories/CharacterRepository";
import { searchQueryParamsFormater } from "../utils/searchQueryParamsFormater";
import { CharacterDTO } from "./characterDTOMapper";

class GetCharactersUseCase {
  private _repository: ICharacterRepository;

  constructor({ repository }: { repository: ICharacterRepository }) {
    this._repository = repository;
  }

  execute({
    queryParams,
  }: {
    queryParams?: SearchFilters;
  }): Promise<CharacterDTO[]> {
    const formatedParams = searchQueryParamsFormater(queryParams?.term);
    return this._repository.getCharacters({ queryParams: formatedParams });
  }
}

export default new GetCharactersUseCase({
  repository: characterRepository,
});

export { GetCharactersUseCase };
