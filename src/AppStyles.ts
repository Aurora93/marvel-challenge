import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #e5e5e5;

  width: 100vw;
  height: 100vh; // TODO media query
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 10px 10px 20px;
  margin-bottom: 20px;
`;

const AppMain = styled.main`
  padding: 20px;
  background-color: #e5e5e5;
`;

const AppFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px 10px 10px 20px;

  p {
    font-size: 0.8em;
  }
`;

export { AppContainer, AppHeader, AppMain, AppFooter };
