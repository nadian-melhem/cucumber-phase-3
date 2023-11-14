import { EmployeePayload } from "../../API/Payload/employees-payload";
import { URLS } from "../../Constants/api-urls";
import { EmployeesResponseInitializer } from "../../Initializers/Response Initializers/employees-response-init";

export class PIMApiHelper {
  static addEmployee(employee: EmployeePayload) {
    return cy
      .request({
        method: "POST",
        url: URLS.EMPLOYEES,
        body: employee,
      })
      .then((response) => {
        return EmployeesResponseInitializer.init(response.body.data);
      });
  }

  static deleteEmployees(ids) {
    cy.request({
      method: "DELETE",
      url: URLS.EMPLOYEES,
      body: { ids: ids },
    });
  }
}
