import {
  CardContainer,
  CharacterImage,
  CharacterName,
  CharacterDescription,
  ButtonWrapper,
  CardBody,
} from "./styles";
import { CharacterCardProps } from "./types";
import RightArrowIcon from "../../assets/icons/rightArrowIcon.svg?react";
import Button from "../Button";

const CharacterCard = ({ character }: CharacterCardProps) => {
  const handleRedirect = () => {
    const newWindow = window.open(character.detailUrl, "_blank");
    if (newWindow) newWindow.focus();
  };

  return (
    <CardContainer data-testid="character-card">
      <CharacterImage
        src={`${character.image.path}.${character.image.extension}`}
        alt={character.name}
        data-testid="character-image"
      />
      <CardBody>
        <CharacterName>{character.name}</CharacterName>
        <CharacterDescription>{character.description}</CharacterDescription>
      </CardBody>
      <ButtonWrapper>
        <Button primary onClick={handleRedirect}>
          Read more
          <RightArrowIcon />
        </Button>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default CharacterCard;
