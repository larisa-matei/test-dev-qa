/// <reference types="cypress" />

describe("Top Voluntari page", () => {
    beforeEach(() => {
        cy.visit("https://iwanttohelp.bim.assistcloud.services/");
        cy.viewport(1440, 900);
    });

    it("Should navigate to Top Voluntari", () => {
        cy.get(":nth-child(2) > .nav-link").click();
        cy.url().should("include", "/");
        cy.get(".card-volunteer").should("have.length.greaterThan", 0);
    });
});
