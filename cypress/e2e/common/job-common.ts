import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { JobTitlesPayloadInitializer } from "../../support/Initializers/Pyload Initializers/job-titles-payload-init";
import { AdminApiHelper } from "../../support/Helpers/Admin Page Helpers/api-helper";

Given("Admin added a new Job title", () => {
  const job = JobTitlesPayloadInitializer.init();
  AdminApiHelper.createJob(job).then((response) => {
    const fullJob = { ...job, jobId: response.id };
    cy.setData("Job", fullJob);
  });
});
