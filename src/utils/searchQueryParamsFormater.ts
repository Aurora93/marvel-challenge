export const searchQueryParamsFormater = (term?: string) => {
  return term
    ? term.length === 1
      ? { nameStartsWith: term }
      : { name: term }
    : {};
};
