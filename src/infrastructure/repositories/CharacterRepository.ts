import { API_GET_CHARACTER } from "./urls";
import Api from "../../domain/Api";
import restApi from "../RestApi";
import ICharacterRepository from "../../domain/ICharacterRepository";
import BaseRepository from "./BaseRepository";
import { SearchFilters } from "../../domain/SearchFilters";

class CharacterRepository
  extends BaseRepository
  implements ICharacterRepository
{
  private _api: Api;
  private _getCharacterEndpoint: string;
  private _getCharactersEndpoint: string;

  constructor({
    api,
    getCharacterEndpoint,
    getCharactersEndpoint,
  }: {
    api: Api;
    getCharacterEndpoint: string;
    getCharactersEndpoint: string;
  }) {
    super();
    this._api = api;
    this._getCharacterEndpoint = getCharacterEndpoint;
    this._getCharactersEndpoint = getCharactersEndpoint;
  }

  getCharacter({ characterId }: { characterId: string }) {
    const url = `${
      this._getCharacterEndpoint
    }/${characterId}${this._createAuthParams()}`;

    return this._api.get(url).then((res) => res); // TODO MAppper
  }

  getCharacters({ queryParams }: { queryParams: SearchFilters }) {
    const url = `${this._getCharactersEndpoint}${this._createQueryParams({
      queryParams,
    })}${this._createAuthParams()}`;
    return this._api.get(url).then((res) => res); // TODO MAppper
  }
}

export default new CharacterRepository({
  api: restApi,
  getCharacterEndpoint: API_GET_CHARACTER,
  getCharactersEndpoint: API_GET_CHARACTER,
});

export { CharacterRepository };