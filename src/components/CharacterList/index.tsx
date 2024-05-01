import { CharacterDTO } from "../../application/characterDTOMapper";

const CharacterList = ({ characters }: { characters: CharacterDTO[] }) => {
  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.characterId}>
            <img
              src={`${character.image.path}.${character.image.extension}`}
              alt={character.name}
            />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
