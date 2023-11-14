import { ShceduleInterviewPayload } from "../../API/Payload/shcedule-interview-payload";
var moment = require("moment");
export class ScheduleInterviewPayoadInitializer {
  static init(empNum: string[]): ShceduleInterviewPayload {
    let interview: ShceduleInterviewPayload = {
      interviewName: "Test",
      interviewDate: moment().format("YYYY-MM-DD"),
      interviewTime: moment().format("HH:mm"),
      note: null,
      interviewerEmpNumbers: empNum,
    };
    return interview
  }
}
