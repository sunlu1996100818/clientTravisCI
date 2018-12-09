describe("login page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/?#/login");

  });
  it("Shows a header", () => {
    cy.get(".a").should('contain','Login in');
  });
  it("Shows a sub-header", () => {
    cy.get(".title").should('contain','Log in');
  });
  it("Shows a href", () => {
    cy.get(".h").should('contain','Forgot your password?');
  });
  it('Shows the input form', () => {
    //cy.get('input[data-test=email]').type("sunlu1996100818@gmail.com").contains('email').next().type('sunlu1996100818@gmail.com');
    cy.get('input[data-test-email]').type("sunlu1996100818@gmail.com");
    cy.get('input[data-test-password]').type("sunlu1996100818");
    cy.get('[data-test-button]').click();
    cy.get('[data-test-text_create]').should('contain','You don\'t have an account ? you can ');
  });

})
