export interface SearchFilters {
  term?: string;
  numberOfResults?: number;
}

export interface FormatedSearchFilters {
  name?: string;
  nameStartsWith?: string;
  limit: number;
}
