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
  const handleRedirect = () => {
    const newWindow = window.open(character.detailUrl, "_blank");
    if (newWindow) newWindow.focus();
  };

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
        <ReadMoreButton onClick={handleRedirect}>
          Read more
          <RightArrowIcon />
        </ReadMoreButton>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default CharacterCard;
