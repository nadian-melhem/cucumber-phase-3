import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import CandidatePayloadInit from "../../support/Initializers/Pyload Initializers/candidate-payload-Init";
import { RecruitmentApiHelper } from "../../support/Helpers/Recruitment Page Helpers/api-helper";
import { CandidatePage } from "../../support/POM/Recruitment Page Files/candidates-page";

Given("Admin added a new candidate", () => {
  cy.getData(["Vacancy"]).then(({ Vacancy }) => {
    const candidate = CandidatePayloadInit.init(Vacancy.vacancyId);
    RecruitmentApiHelper.addCandidate(candidate).then((response) => {
      const fullCandidate = { ...candidate, candidateId: response.id };
      cy.setData("Candidate", fullCandidate);
    });
  });
});

When("Admin Access the candidate form", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
  );
  cy.getData(["Employee", "Job", "Candidate", "Vacancy"]).then(
    ({ Employee, Job, Candidate, Vacancy }) => {
      const CANDIDATE_NAME = Candidate.firstName;
      const HIRING_MANAGER = `${Employee.firstName} ${Employee.lastName}`;
      CandidatePage.searchForCandidate(
        Job.title,
        Vacancy.name,
        CANDIDATE_NAME,
        HIRING_MANAGER
      );
    }
  );
  CandidatePage.viewCandidateForm();
});
