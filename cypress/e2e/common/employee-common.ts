import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { EmployeePayloadInitializer } from "../../support/Initializers/Pyload Initializers/employees-payload-init";
import { PIMApiHelper } from "../../support/Helpers/PIM Page Helpers/api-helper";

Given("Admin added new employee", () => {
  const employee = EmployeePayloadInitializer.init();
  PIMApiHelper.addEmployee(employee).then((response) => {
    const fullEmployee = { ...employee, employeeNumber: response.empNumber };
    cy.setData("Employee", fullEmployee);
  });
});
