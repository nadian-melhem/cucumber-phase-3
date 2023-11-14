export class CandidatePage {
  static elements = {
    jobTitle: () =>
      cy.get(
        ":nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
      ),
    vacancy: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),
    candidateName: () => cy.get(".oxd-autocomplete-text-input > input"),

    hiringManager: () =>
      cy.get(
        ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
      ),

    dropDownList: () => cy.get('[role="listbox"]'),
    button: () => cy.get(".oxd-button"),
    viewIcon: () => cy.get(".oxd-icon.bi-eye-fill"),
  };

  static searchForCandidate(jobTitle, vacancy, candidateName, hiringManager) {
    this.elements.jobTitle().click({ force: true });
    this.elements.dropDownList().contains(jobTitle).click();
    this.elements.vacancy().click({ force: true });
    this.elements.dropDownList().contains(vacancy).click();
    this.elements.candidateName().type(candidateName);
    this.elements.dropDownList().contains(candidateName).click();
    // this.elements.hiringManager().click({ force: true });
    // this.elements.dropDownList().contains(hiringManager).click();
    this.elements.button().contains("Search").click({ force: true });
  }

  static viewCandidateForm() {
    this.elements.viewIcon().click();
  }
}
