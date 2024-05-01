import React from "react";
import {
  CardContainer,
  CharacterImage,
  CharacterName,
  CharacterDescription,
  ReadMoreButton,
  ButtonWrapper,
  CardBody,
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
      <CardBody>
        <CharacterName>{character.name}</CharacterName>
        <CharacterDescription>{character.description}</CharacterDescription>
      </CardBody>
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
