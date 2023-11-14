import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given("Admin login to the system", () => {
  cy.login("Admin", "admin123");
});

Given("User log out", () => {
  cy.logout();
});
