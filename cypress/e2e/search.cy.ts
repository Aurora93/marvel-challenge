import { selectors } from "../support/selectors";
import characters from "../fixtures/characters.json";

const NUMBER_OF_CHARACTERS = 6;

describe("CharacterSearch", () => {
  it("displays six characters when user loads the page", () => {
    // Visit home
    cy.visit("/");
    cy.intercept("GET", "https://gateway.marvel.com/v1/public/characters?*").as(
      "getCharacters"
    );

    cy.get(selectors.spinner).should("be.visible"); // Check if spinner is displayed while loading
    cy.wait("@getCharacters");

    cy.get(selectors.characterCard).should("have.length", NUMBER_OF_CHARACTERS);
  });

  it("should user be able to search by character name", () => {
    // Visit home
    cy.visit("/");
    cy.intercept("GET", "https://gateway.marvel.com/v1/public/characters?*").as(
      "getCharacters"
    );

    cy.get(selectors.spinner).should("be.visible"); // Check if spinner is displayed while loading
    cy.wait("@getCharacters");

    // Simulate search action
    cy.get(selectors.searchInput).type(characters.searchCharacter.name);
    cy.get(selectors.searchButton).click();

    // Wait for the API call to complete
    cy.wait("@getCharacters");

    cy.get(selectors.spinner).should("not.exist");

    cy.contains(characters.searchCharacter.name).should("be.visible");
  });

  it("should user be able to search by first letter name", () => {
    // Visit home
    cy.visit("/");
    cy.intercept("GET", "https://gateway.marvel.com/v1/public/characters?*").as(
      "getCharacters"
    );

    cy.get(selectors.spinner).should("be.visible"); // Check if spinner is displayed while loading
    cy.wait("@getCharacters");

    // Simulate search action
    cy.get(selectors.searchInput).type("s");
    cy.get(selectors.searchButton).click();

    // Wait for the API call to complete
    cy.wait("@getCharacters");

    cy.get(selectors.spinner).should("not.exist");

    // Check the results
    cy.get(selectors.characterCard).should("have.length", NUMBER_OF_CHARACTERS);
    cy.get(selectors.characterCard).each(($card) => {
      cy.wrap($card)
        .find('[data-testid="character-name"]')
        .should("contain.text", "S");
    });
  });

  it("should redirect to comic character page when user press Read more button", () => {
    // Visit home
    cy.visit("/");
    cy.intercept("GET", "https://gateway.marvel.com/v1/public/characters?*").as(
      "getCharacters"
    );

    cy.get(selectors.spinner).should("be.visible"); // Check if spinner is displayed while loading

    // Wait for the API call to complete
    cy.wait("@getCharacters");

    // Press the button
    cy.get(selectors.readMoreButton).first().click();

    // Check if a new window is opened
    cy.window().then((win) => {
      cy.wrap(win).should("not.be.undefined");
    });
  });

  it("should load 6 more characters when user press Load more button", () => {
    // Visit home
    cy.visit("/");
    cy.intercept("GET", "https://gateway.marvel.com/v1/public/characters?*").as(
      "getCharacters"
    );

    cy.get(selectors.spinner).should("be.visible"); // Check if spinner is displayed while loading

    // Wait for the API call to complete
    cy.wait("@getCharacters");

    // Press the button
    cy.get(selectors.loadMoreButton).first().click();
    cy.wait("@getCharacters");

    // Check if more characters are loaded
    cy.get(selectors.characterCard).should(
      "have.length",
      NUMBER_OF_CHARACTERS * 2
    );
  });

  it("should display an error message when request fails", () => {
    // Intercept the request and force it to fail
    cy.intercept("GET", "https://gateway.marvel.com/v1/public/characters?*", {
      statusCode: 500,
      body: "Internal Server Error",
      headers: { "Content-Type": "text/plain" },
    }).as("getCharacters");

    // Visit home
    cy.visit("/");

    // Wait for the API call to complete
    cy.wait("@getCharacters");

    // Check if error message is displayed
    cy.get(selectors.errorMessage).should("be.visible");
  });

  it("should display No result message when there is no characters", () => {
    const characterThatNotExist = "randomCharacterNotExist123";
    // Visit home
    cy.visit("/");
    cy.intercept("GET", "https://gateway.marvel.com/v1/public/characters?*").as(
      "getCharacters"
    );

    cy.get(selectors.spinner).should("be.visible"); // Check if spinner is displayed while loading
    cy.wait("@getCharacters");

    // Simulate search action
    cy.get(selectors.searchInput).type(characterThatNotExist);
    cy.get(selectors.searchButton).click();

    // Wait for the API call to complete
    cy.wait("@getCharacters");

    // Check if error message is displayed
    cy.get(selectors.noResultsMessage).should("be.visible");
  });
});
