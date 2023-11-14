/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { RecruitmentApiHelper } from "../../support/Helpers/Recruitment Page Helpers/api-helper";
import { CandidateFormPage } from "../../support/POM/Recruitment Page Files/candidate-form-page";

Given("Admin ShortListed the added candidate", () => {
  cy.getData(["Candidate"]).then(({ Candidate }) => {
    RecruitmentApiHelper.shortListCandidate(Candidate.candidateId);
  });
});

Given("Admin sheceduled Interview to the added candidate", () => {
  cy.getData(["Employee", "Candidate"]).then(({ Employee, Candidate }) => {
    RecruitmentApiHelper.shceduleInterview(Candidate.candidateId, [
      Employee.employeeNumber,
    ]);
  });
});

When("Change the candidate status to {string}", (status: string) => {
  CandidateFormPage.changeCandidateStatus(status);
});

Then(
  "The Admin should successfully transition the candidate's status to {string}",
  (status: string) => {
    CandidateFormPage.verifyCandidateStatus(status);
  }
);
Then("Emphasize the modification of status {string}", (status: string) => {
  CandidateFormPage.emphasizeStatus(status);
});
