/// <reference types="cypress" />

describe("Top Voluntari page", () => {
    beforeEach(() => {
      cy.visit("https://iwanttohelp.bim.assistcloud.services/");
      cy.viewport(1440, 900);
    });
  
    it("Should be able to zoom in and out the map", () => {
      cy.get(":nth-child(2) > .nav-link").click();
      cy.wait(2000);
      cy.get("[aria-label='Zoom in']").click();
      cy.get("[aria-label='Zoom out']").click();
    });
  });
  