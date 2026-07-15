// cypress/e2e/scroll-to-top.cy.js
describe("Scroll to top button", () => {
  beforeEach(() => {
    cy.visit("../../Components/scroll-to-top.html");
  });

  it("affiche le bouton scroll-to-top quand on scrolle vers le bas", () => {
    
    cy.get('[data-cy="scroll-down-btn"]').should("be.visible");

    cy.get('[data-cy="scroll-to-top-btn"]').should("not.be.visible");

    cy.scrollTo("bottom");

    cy.get('[data-cy="scroll-to-top-btn"]').should("be.visible");
  });

  it("remonte en haut et cache le bouton après clic sur scroll-to-top", () => {
    
    cy.scrollTo("bottom");
    cy.get('[data-cy="scroll-to-top-btn"]').should("be.visible");

    cy.get('[data-cy="scroll-to-top-btn"]').click();

    cy.window().its("scrollY").should("equal", 0);

    cy.get('[data-cy="scroll-to-top-btn"]').should("not.be.visible");
  });
});
