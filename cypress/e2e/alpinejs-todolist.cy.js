// cypress/e2e/alpinejs-todolist.cy.js
describe("Liste de tâches Alpine.js", () => {
  beforeEach(() => {
    cy.visit("../../Components/alpinejs-todolist.html");
  });

  it("ajoute 4 todos puis supprime la 2e et vérifie qu’il reste 3 todos", () => {
    const todos = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];

    todos.forEach((todo) => {
      cy.get('[data-cy="todo-input"]').clear().type(todo);
      cy.get('[data-cy="add-todo-btn"]').click();
    });

    cy.get('[data-cy="todo-item"]').should("have.length", 4);

    cy.get('[data-cy="todo-item"]')
      .eq(1)
      .parent()
      .find('[data-cy="delete-todo-btn"]')
      .click();

    cy.get('[data-cy="todo-item"]').should("have.length", 3);

    cy.contains('[data-cy="todo-item"]', "Todo 2").should("not.exist");
  });
});