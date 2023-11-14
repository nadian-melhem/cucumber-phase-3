/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { RecruitmentApiHelper } from "../../support/Helpers/Recruitment Page Helpers/api-helper";
import { CandidateFormPage } from "../../support/POM/Recruitment Page Files/candidate-form-page";
import { verifyFileContents } from "../../support/Utils/files-util";

const FILE_PATH = "cypress/fixtures/test.txt";

Given("Admin ShortListed the added candidate", () => {
  cy.getData(["Candidate"]).then(({ Candidate }) => {
    RecruitmentApiHelper.shortListCandidate(Candidate.candidateId);
  });
});

Given("Admin sheceduled Interview to the added candidate", () => {
  cy.getData(["Candidate", "Employee"]).then(({ Candidate, Employee }) => {
    RecruitmentApiHelper.shceduleInterview(Candidate.candidateId, [
      Employee.employeeNumber,
    ]);
  });
});

Given("Change the candidate status to {string}", (status: string) => {
  CandidateFormPage.changeCandidateStatus(status);
});

When("Admin Enable Edit candidate switch", () => {
  CandidateFormPage.enableEditSwitch();
});

When("Upload a txt file to the Resume section", () => {
  CandidateFormPage.uploadResume(FILE_PATH);
});

When("Save the form", () => {
  CandidateFormPage.saveCandidateProfile();
});

When("Download the uploaded file", () => {
  CandidateFormPage.downloadResume();
});

Then("The uploaded file should contain the same data as was uploaded", () => {
  verifyFileContents(FILE_PATH);
});
