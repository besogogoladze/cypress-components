// cypress/e2e/smart-tag.cy.js
describe("Smart tag", () => {
  beforeEach(() => {
    cy.visit("../../Components/smart-tag.html");
  });

  // Tester l'apparition du tag au survol du bouton "See more".
  // Tester la disparition du tag à la sortie du survol du bouton "See more".
  it('affiche le tag au survol du bouton "See more" et le cache à la sortie du survol', () => {
    cy.get('[data-cy="smart-tag-content"]')
      .should("not.be.visible")
      .and("contain.text", "Lorem ipsum dolor sit amet");

    cy.get('[data-cy="smart-tag-trigger"]').trigger("mouseover");
    cy.get('[data-cy="smart-tag-content"]').should("be.visible");

    cy.get('[data-cy="smart-tag-trigger"]').trigger("mouseout");
    cy.get('[data-cy="smart-tag-content"]').should("not.be.visible");
  });
});
