import ICharacterRepository from "../domain/ICharacterRepository";
import characterRepository from "../infrastructure/repositories/CharacterRepository";

class GetCharacterUseCase {
  private _repository: ICharacterRepository;

  constructor({ repository }: { repository: ICharacterRepository }) {
    this._repository = repository;
  }

  execute({ characterId }: { characterId: string }): Promise<any> {
    // TODO type any
    return this._repository.getCharacter({ characterId });
  }
}

export default new GetCharacterUseCase({
  repository: characterRepository,
});

export { GetCharacterUseCase };
