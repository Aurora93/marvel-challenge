import { SearchFilters } from "../domain/SearchFilters";

export const searchQueryParamsFormater = ({
  term,
  numberOfResults = 6,
}: SearchFilters) => {
  return term
    ? term.length === 1
      ? { nameStartsWith: term, limit: numberOfResults }
      : { name: term, limit: numberOfResults }
    : { limit: numberOfResults };
};
