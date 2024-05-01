import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #e5e5e5;
  padding: 20px;
  width: 100vw;
  height: 200vh;
`;

const AppHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
`;

const AppMain = styled.main`
  padding: 20px 0px 20px 0px;
`;

const AppFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-top: 20px;

  p {
    font-size: 0.8em;
  }
`;

export { AppContainer, AppHeader, AppMain, AppFooter };
