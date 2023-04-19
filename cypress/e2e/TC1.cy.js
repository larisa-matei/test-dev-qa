/// <reference types="cypress" />

describe("Header", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should navigate to Acasa", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.url().should("include", "/");
  });

  it("Should navigate to Top Voluntari", () => {
    cy.get(":nth-child(2) > .nav-link").click();
    cy.url().should("include", "/");
  });

  it("Should navigate to Lista Nevoi", () => {
    cy.get(":nth-child(3) > .nav-link").click();
    cy.url().should("include", "/");
  });

  it("Should navigate to Despre Noi", () => {
    cy.get(":nth-child(4) > .nav-link").click();
    cy.url().should("include", "/");
  });

  it("Should navigate to Ofera Sugestie", () => {
    cy.get(":nth-child(5) > .nav-link").click();
    cy.url().should("include", "/");
  });

  it("Should navigate to Devino Voluntar", () => {
    cy.get(":nth-child(6) > .nav-link").click();
    cy.url().should("include", "/");
  });

  it("Should navigate to Autentificare", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.url().should("include", "/");
  });
});
