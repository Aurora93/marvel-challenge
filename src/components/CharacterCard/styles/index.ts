import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  height: 550px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 10px 0px 0px;
  overflow: hidden;
`;

const CharacterImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 3px 3px 0 0;
`;

const CharacterName = styled.h2`
  font-size: 1.5rem;
  margin-top: 12px;
  margin-left: 16px;
`;

const CharacterDescription = styled.p`
  font-size: 1rem;
  margin-top: 8px;
  padding: 0 16px 0 16px;
  height: 70px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
`;

const ButtonWrapper = styled.div`
  padding: 0 16px 16px 0;
  display: flex;
  flex-direction: row-reverse;
`;

const ReadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  margin-top: 16px;
  height: 50px;
  background-color: #444444;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #333333;
  }
  & svg {
    fill: #ffffff;
    width: 16px;
    height: 16px;
  }
`;

export {
  CardContainer,
  CharacterImage,
  CharacterName,
  CharacterDescription,
  ReadMoreButton,
  ButtonWrapper,
};
