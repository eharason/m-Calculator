describe("Mortgage form test", () => {
  it("Failing test", () => {
    cy.visit("/home");
    cy.get('[data-test=test-mortgageAmount]').clear();
    cy.get('[data-test=test-mortgageAmount]').type(200000);
    cy.get('[data-test=test-interestRate]').clear();
    cy.get('[data-test=test-interestRate]').type('2s');
    cy.get('[data-test=test-submit]').click();
    cy.get('[data-test=test-result]');
  });
  it.only("Passing test", () => {
    cy.visit("/home");
    cy.get('[data-test=test-mortgageAmount]').clear();
    cy.get('[data-test=test-mortgageAmount]').type(200000);
    cy.get('[data-test=test-interestRate]').clear();
    cy.get('[data-test=test-interestRate]').type(2.8);
    cy.get('[data-test=test-submit]').click();
    cy.get('[data-test=test-result]');
  });
});
