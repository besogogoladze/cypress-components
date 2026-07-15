// cypress/e2e/modal.cy.js
describe("Fenêtre modale", () => {
  beforeEach(() => {
    cy.visit("../../Components/modal.html");
  });

  it('ouvre la fenêtre modale au clic sur "Display"', () => {
    cy.get('[data-cy="modal-title"]').should("not.be.visible");

    cy.get('[data-cy="open-modal-btn"]').click();

    cy.get('[data-cy="modal-title"]').should("be.visible");
  });

  it("ferme la fenêtre modale au clic en dehors de la modale", () => {
    cy.get('[data-cy="open-modal-btn"]').click();
    cy.get('[data-cy="modal-title"]').should("be.visible");

    cy.get('[data-cy="modal-overlay"]').click("topLeft");

    cy.get('[data-cy="modal-title"]').should("not.be.visible");
  });

  it('vérifie que la fenêtre modale contient un h2 avec "Lorem Ipsum"', () => {
    cy.get('[data-cy="open-modal-btn"]').click();

    cy.get('[data-cy="modal-title"]')
      .should("be.visible")
      .and("contain.text", "Lorem Ipsum");
  });
});
