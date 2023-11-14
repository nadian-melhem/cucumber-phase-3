import { CandidatePayload } from "../../API/Payload/candidate-api-payload";

export default class CandidatePayloadInit{
  static init(vacancyId):CandidatePayload{
    let candidateDetails : CandidatePayload= {
          comment: null,
          consentToKeepData: false,
          contactNumber: null,
          dateOfApplication: null,
          email: "nadian@gmail.com",
          firstName: `nadian${Math.floor(Math.random() *100)}`,
          keywords: null,
          lastName: `melhem${Math.floor(Math.random() *100)}`,
          middleName: null,
          vacancyId: vacancyId
        
    }
    return candidateDetails;
  }
}