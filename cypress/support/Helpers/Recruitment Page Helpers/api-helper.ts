import AddVacancyPayload from "../../API/Payload/add-vacancy-payload";
import { URLS } from "../../Constants/api-urls";
import CandidatePayloadInit from "../../Initializers/Pyload Initializers/candidate-payload-Init";
import { ScheduleInterviewPayoadInitializer } from "../../Initializers/Pyload Initializers/shcedule-interview-payload-init";

export class RecruitmentApiHelper {
  static addVacancy(vacancy: AddVacancyPayload) {
    return cy.request({
      method: "POST",
      url: URLS.ADD_VACANCY,
      body: vacancy,
    });
  }
  static addCandidate(candidate: CandidatePayloadInit) {
    return cy
      .request({
        method: "Post",
        url: URLS.ADD_CANDIDATE,
        body: candidate,
      })
      .then((response) => {
        return response.body.data;
      });
  }
  static shortListCandidate(id: String) {
    return cy.request({
      method: "PUT",
      url: `${URLS.SHORT_LIST_CANDIDATE}${id}${"/shortlist"}`,
      body: {
        note: null,
      },
    });
  }

  static shceduleInterview(candidateId: string, empNumber: string[]) {
    return cy.request({
      method: "POST",
      url: `${URLS.SCHEDULE_INTERVIEW}${candidateId}/shedule-interview`,
      body: ScheduleInterviewPayoadInitializer.init(empNumber),
    });
  }

  static accessCandidateForm(empNumber: string) {
    return cy.visit(`${URLS.CNDIDATE_FORM}${empNumber}`);
  }
}
