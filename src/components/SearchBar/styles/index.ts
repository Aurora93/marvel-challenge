import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-right: 0px;
  border-radius: 4px 0 0 4px;
  width: 300px;
`;

const SearchButton = styled.button`
  padding: 5px;
  background-color: #eb2327;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  & svg {
    & .fillable {
      fill: #ffffff;
      width: 20px;
      height: 20px;
    }
  }
`;

export { SearchContainer, SearchInput, SearchButton };
