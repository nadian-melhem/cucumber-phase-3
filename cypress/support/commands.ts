// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { EmployeePayload } from "./API/Payload/employees-payload";

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
export {};
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getByPlaceHolder: typeof getByPlaceHolder;
      login: typeof login;
      logout: typeof logout;
      setData: typeof setData;
      getData: typeof getData;
    }
  }
}

/**
 * Get element by placeholder
 * @param field placeholder text
 * @returns element
 */
function getByPlaceHolder(field: string) {
  return cy.get("[placeholder=" + field + "]");
}

/**
 * login by username and password
 * @param username
 * @param password
 */
function login(username: string, password: string) {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get('[placeholder="Username"]').type(username);
  cy.get('[placeholder="Password"]').type(password);
  cy.get("button").click();
}

function logout() {
  cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
  cy.get(".oxd-dropdown-menu")
    .find("[role='menuitem']")
    .contains("Logout")
    .click();
}

const data = {};
type DataType = "Employee" | "Vacancy" | "Job" | "Candidate";

function setData<T extends object>(key: DataType, value: T) {
  data[key] = value;
}

function getData(key: DataType | DataType[]) {
  const keys = Array.isArray(key) ? key : [key];
  return cy.then(() =>
    keys.reduce((values, key) => {
      return {
        ...values,
        [key]: data[key],
      };
    }, {} as any)
  );
}

Cypress.Commands.add("login", login);
Cypress.Commands.add("logout", logout);
Cypress.Commands.add("getByPlaceHolder", getByPlaceHolder);
Cypress.Commands.add("setData", setData);
Cypress.Commands.add("getData", getData);
