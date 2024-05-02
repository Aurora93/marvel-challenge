import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 325px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 20px 0px 0px;
  overflow: hidden;
  padding-bottom: 16px;
  background-color: #ffffff;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 3px 3px 0 0;
`;

const CharacterName = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
`;

const CharacterDescription = styled.p`
  font-size: 1rem;
  margin-top: 8px;

  height: 70px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: pre-wrap;
  padding-right: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 20px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  justify-content: space-around;
`;

export {
  CardContainer,
  CharacterImage,
  CharacterName,
  CharacterDescription,
  ButtonWrapper,
  CardBody,
};
