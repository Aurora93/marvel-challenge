import React from "react";
import SearchIcon from "../../assets/icons/searchIcon.svg?react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";
import { SearchBarPops } from "./types";

const SearchBar = ({ placeholder, onSearch }: SearchBarPops) => {
  const [searchTerm, setSearchTerm] = React.useState("");

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
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
