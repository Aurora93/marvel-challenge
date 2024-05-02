import styled from "styled-components";

export const Button = styled.button<{
  primary?: boolean;
  secondary?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  height: 50px;
  border-radius: 3px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) =>
    props.primary &&
    `
    background-color: #444444;
    color: #fffff;
    border: none;
    &:hover {
      background-color: #333333;
    }
    & svg {
      fill: #ffffff;
      width: 16px;
      height: 16px;
    }
  `}

  ${(props) =>
    props.secondary &&
    `
    background-color: #fffff;
    color: #444444;
    border: 2px solid #444444;
    &:hover {
      background-color: #888888;
    }
    & svg {
      fill: #444444;
      width: 16px;
      height: 16px;
    }
  `}
`;
