export default interface AddVacancyPayload {
    name: string,
    jobTitleId: number,
    employeeId: number,
    numOfPositions: number,
    description: string
    status: boolean,
    isPublished: boolean

}
