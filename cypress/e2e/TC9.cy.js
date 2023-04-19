/// <reference types="cypress" />

describe("Nevoi recomandate page", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should be able to remove", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('input[name="phone_number"]').type("0785326944");
    cy.get('input[name="password"]').type("Test34");
    cy.get(".btn-primary").click();
    cy.get(".dashboard-layout").should("exist")
    cy.get(":nth-child(3) > .nav-link").should("exist").click({ multiple: true, force: true });
    cy.get('.fas.fa-trash-alt.view.text-danger.action-icon').eq(0).click();
    cy.contains('button', 'Confirma').click();
  });
});
