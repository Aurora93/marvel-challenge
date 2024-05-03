import styled from "styled-components";
import { mediaQueries } from "./infrastructure/theme/mediaQueries";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #e5e5e5;

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 10px 10px 20px;
  margin-bottom: 20px;

  @media screen and (max-width: ${mediaQueries.DESKTOP}px) {
    padding-left: 40px;
  }
`;

const AppMain = styled.main`
  padding: 20px;
  background-color: #e5e5e5;

  @media screen and (max-width: ${mediaQueries.DESKTOP}px) {
    padding-left: 40px;
  }
`;

const AppFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px 10px 10px 20px;

  p {
    font-size: 0.8em;
  }

  @media screen and (max-width: ${mediaQueries.DESKTOP}px) {
    padding-left: 40px;
  }
`;

export { AppContainer, AppHeader, AppMain, AppFooter };
