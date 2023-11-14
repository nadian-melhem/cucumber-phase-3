export class CandidateFormPage {
  static elements = {
    button: () => cy.get(".oxd-button"),
    applicationStageContainer: () => cy.get(".orangehrm-card-container"),
    editSwitch: () => cy.get(".oxd-switch-input"),
    uploadButton: () => cy.get(".oxd-file-button"),
    inputFile: () => cy.get('input[type="file"]'),
    saveButton: () => cy.get('button[type="submit"]'),
    downloadIcon: () => cy.get(".orangehrm-file-preview")
  };

  static changeCandidateStatus(status: string) {
    this.elements.button().contains(status).click({ force: true });
    this.elements.button().contains("Save").click();
  }
  static emphasizeStatus(status: string) {
    this.elements
      .applicationStageContainer()
      .contains(`Status: ${status}`)
      .click({ force: true })
      .type("{ctrl+a}", { force: true });
  }
  static verifyCandidateStatus(status: string) {
    this.elements
      .applicationStageContainer()
      .contains(status)
      .should("contain", status);
  }

  static enableEditSwitch() {
    this.elements.editSwitch().click({force: true});
  }

  static uploadResume(filePath) {
    this.elements.inputFile().selectFile(filePath,{force: true});
  }

  static saveCandidateProfile() {
    this.elements.saveButton().click({force: true});
  }

  static downloadResume(){
    this.elements.downloadIcon().click({force: true})
  }
}
