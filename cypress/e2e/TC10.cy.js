/// <reference types="cypress" />

describe("Nevoi recomandate page", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should be able to search", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('input[name="phone_number"]').type("0785326944");
    cy.get('input[name="password"]').type("Test34");
    cy.get(".btn-primary").click();
    cy.get(".dashboard-layout").should("exist")
    cy.get(":nth-child(3) > .nav-link").should("exist").click({ multiple: true, force: true });
    
    // Search by DESCRIERE
    cy.get('input[name="Filter"]').type("mere");
    cy.wait(1000);
    cy.get('input[name="Filter"]').clear();
    cy.wait(1000);

    // Search by PERSOANA CONTACT
    cy.get('input[name="Filter"]').type("Popescu");
    cy.wait(1000);
    cy.get('input[name="Filter"]').clear();
    cy.wait(1000);

    // Search by ADRESA
    cy.get('input[name="Filter"]').type("Strada");
    cy.wait(1000);
    cy.get('input[name="Filter"]').clear();
    cy.wait(1000);
    
    // Search by TELEFON
    cy.get('input[name="Filter"]').type("0785326944");
    cy.wait(1000);
    cy.get('input[name="Filter"]').clear();
    cy.wait(1000);
  });
});
