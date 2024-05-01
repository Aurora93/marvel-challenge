import { AppContainer, AppHeader, AppMain, AppFooter } from "./AppStyles";
import CharacterSearch from "./components/CharacterSearch";

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <h2>Search your character</h2>
      </AppHeader>
      <AppMain>
        <CharacterSearch />
      </AppMain>
      <AppFooter>
        <p>Data provided by Marvel. © 2024 MARVEL</p>
      </AppFooter>
    </AppContainer>
  );
}

export default App;
