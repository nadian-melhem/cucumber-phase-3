import { JobTitlePayload } from "../../API/Payload/job-titles-payload";
import { URLS } from "../../Constants/api-urls";
import { JobTitlesResponseInitializer } from "../../Initializers/Response Initializers/job-titles-response-init";

export class AdminApiHelper {
  static createJob(job: JobTitlePayload) {
    return cy
      .request({
        method: "POST",
        url: URLS.JOB_TITLES,
        body: job,
      })
      .then((response) => {
        return JobTitlesResponseInitializer.init(response.body.data);
      });
  }
}
