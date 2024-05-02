import styled from "styled-components";

const Button = styled.button<{
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
    color: #ffffff;
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
    background-color: #ffffff;
    color: #444444;
    border: 2px solid #444444;
    &:hover {
      background-color: #F4F4F4;
    }
    & svg {
      fill: #fffff;
      width: 16px;
      height: 16px;
    }
  `}
`;

export default Button;
