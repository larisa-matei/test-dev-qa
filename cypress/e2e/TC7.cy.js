/// <reference types="cypress" />

describe("Nevoi recomandate page", () => {
  beforeEach(() => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.viewport(1440, 900);
  });

  it("Should be not able to add", () => {
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get('input[name="phone_number"]').type("0785326944");
    cy.get('input[name="password"]').type("Test34");
    cy.get(".btn-primary").click();
    cy.get(".dashboard-layout").should("exist")
    cy.get(":nth-child(3) > .nav-link").should("exist").click({ multiple: true, force: true });
    cy.get('button[type="submit"]').click();
    cy.get('input[name="contact_first_name"]').type("fhg");
    cy.get('input[name="contact_last_name"]').type("GHfh");
    cy.get('input[name="contact_phone_number"]').type("0785326943");
    cy.get('div[role="combobox"]').click();
    cy.get('.vs__dropdown-menu').first().should("exist").click();
    cy.get('.pac-target-input').type("Strada booo");
    cy.get('input[name="county"]').type("Suceava");
    cy.get('input[name="city"]').type("Suceava");
    cy.get('input[name="postal_code"]').type("727202");
    cy.get('button[type="submit"]').click();
    cy.get('div[role="group"].form-group').find('.errors').then(($errors) => {
      if ($errors.length) 
        cy.log('There are errors in the form-group element.');
    });
    cy.get(":nth-child(3) > .nav-link").should("exist").click({ multiple: true, force: true });
  });
});
