/// <reference types="cypress" />

describe("Nevoi page", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should be able to apply", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('input[name="phone_number"]').type("0785326944");
    cy.get('input[name="password"]').type("Test34");
    cy.get(".btn-primary").click();
    cy.get(".dashboard-layout").should("exist")
    cy.get(":nth-child(2) > .nav-link").should("exist").click({ multiple: true, force: true });
    cy.get('table')
      .contains('td', 'In progres')
      .parent('tr')
      .within(() => {
        cy.get('.fas.fa-check.view.text-success.action-icon')
          .click();
      });
    cy.get('.vue-star-rating')
      .find('.vue-star-rating-star')
      .first()
      .click();
    cy.get('textarea[name="comment"]').type("gfgfdgdfg");
    cy.contains('button', 'Trimite').click();
  });
});