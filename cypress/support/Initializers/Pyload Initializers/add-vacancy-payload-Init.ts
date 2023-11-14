import AddVacancyPayload from "../../API/Payload/add-vacancy-payload";

export default class AddVacancyPayloadInit {
    static initVacancy(employeeId: AddVacancyPayload["employeeId"], jobId): AddVacancyPayload {
        let vacancy: AddVacancyPayload = {
            name: "test"+ Math.floor(Math.random() * 100),
            jobTitleId: jobId,
            employeeId,
            numOfPositions: 3,
            description: "",
            status: true,
            isPublished: false
        }
        return vacancy
    }

}