import { Given } from "@badeball/cypress-cucumber-preprocessor";
import AddVacancyPayloadInit from "../../support/Initializers/Pyload Initializers/add-vacancy-payload-Init";
import { RecruitmentApiHelper } from "../../support/Helpers/Recruitment Page Helpers/api-helper";

Given("Admin added a new vacancy", () => {
  cy.getData(["Employee", "Job"]).then(({ Employee, Job }) => {
    const vacancy = AddVacancyPayloadInit.initVacancy(
      Employee.employeeNumber,
      Job.jobId
    );
    RecruitmentApiHelper.addVacancy(vacancy).then((response) => {
      const fullVacancy = { ...vacancy, vacancyId: response.body.data.id };
      cy.setData("Vacancy", fullVacancy);
    });
  });
});
