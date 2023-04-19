/// <reference types="cypress" />

describe("Autentificare page", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should be login with invalid credentials", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('input[type="text"]').type("0785326944");
    cy.get('input[type="password"]').type("Testgf34");
    cy.get(".btn-primary").click();
    cy.get(".alert-danger").should("contain.text", "Autentificarea a esuat!");
  });
});
