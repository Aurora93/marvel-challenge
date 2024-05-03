import { useState } from "react";
import SearchIcon from "../../assets/icons/searchIcon.svg?react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";
import { SearchBarPops } from "./types";

const SearchBar = ({ placeholder, onSearch }: SearchBarPops) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        data-testid="search-input"
      />
      <SearchButton onClick={handleSearch} data-testid="search-button">
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
