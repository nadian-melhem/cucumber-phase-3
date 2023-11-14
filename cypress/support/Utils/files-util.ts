export function verifyFileContents(filePath: string) {
  const FILE_NAME = filePath.replace(/^.*[\\/]/, "");
  cy.readFile(filePath).then((file) => {
    cy.readFile(`cypress/downloads/${FILE_NAME}`).should("eq", file);
  });
}
