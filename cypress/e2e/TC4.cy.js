/// <reference types="cypress" />

describe("Autentificare page", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should be able to login with valid credentials", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('input[type="text"]').type("0785326944");
    cy.get('input[type="password"]').type("Test34");
    cy.get(".btn-primary").click();
    cy.get(".dashboard-layout").should("exist")
  });
});
