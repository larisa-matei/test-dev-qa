/// <reference types="cypress" />

describe("Autentificare", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should be logout", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('input[name="phone_number"]').type("0785326944");
    cy.get('input[name="password"]').type("Test34");
    cy.get(".btn-primary").click();
    cy.get(".dashboard-layout").should("exist")
    cy.wait(2000)
    cy.get(".nav-link").should("exist")
      .contains("Deconectare").should("exist").click();
    cy.get(".dashboard-layout").should("not.exist")
  });
});