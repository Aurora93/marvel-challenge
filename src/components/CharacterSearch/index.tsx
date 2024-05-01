import SearchBar from "../SearchBar";
// import CharacterList from "./CharacterList";
import getCharacters from "./../../application/GetCharactersUseCase";

const CharacterSearch = () => {
  const handleSearch = (term: string) => {
    getCharacter(term);
  };

  const getCharacter = async (term: string) => {
    const characters = await getCharacters.execute({
      queryParams: {
        name: term,
      },
    });
    console.log(characters);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Name of character" />
      {/* <CharacterList searchTerm={searchTerm} /> */}
    </div>
  );
};

export default CharacterSearch;
