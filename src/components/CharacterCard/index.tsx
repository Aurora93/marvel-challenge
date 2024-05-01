import React from "react";
import {
  CardContainer,
  CharacterImage,
  CharacterName,
  CharacterDescription,
  ReadMoreButton,
  ButtonWrapper,
} from "./styles";
import { CharacterCardProps } from "./types";
import RightArrowIcon from "../../assets/icons/rightArrowIcon.svg?react";

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <CardContainer>
      <CharacterImage
        src={`${character.image.path}.${character.image.extension}`}
        alt={character.name}
      />
      <CharacterName>{character.name}</CharacterName>
      <CharacterDescription>{character.description}</CharacterDescription>
      <ButtonWrapper>
        <ReadMoreButton>
          Read more
          <RightArrowIcon />
        </ReadMoreButton>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default CharacterCard;
