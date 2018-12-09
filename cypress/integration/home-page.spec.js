describe("Home page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/?#/home");
  });

  it("Shows a header", () => {
    cy.get("[data-test-head]").should('contain','Homepage of cargo delivery syetem');
  });

  it("Shows a correct lead", () => {
    cy.get("[data-test-title]").should('contain','Welcome to the cargo delivery system');
  });

  it("Shows a clickable button", () => {
    cy.get("[data-test-button2]").click();
  });

  it("Shows a correct content words", () => {
    cy.get("[data-test-content]").should('contain','This is a Cargo Delivery&Search System');
  });

  it("Shows a correct lead", () => {
    cy.get("[data-test-Head2]").should('contain','This is the homepage of the Cargo Delivery System Web app');
  });

  //cy.get('[data-test-text_create]').should('contain','You don\'t have an account ? you can ');
  describe("Navigation bar", () => {
      it("Shows the required links", () => {
        cy.get(".navbar").contains('Home' );
        cy.get(".navbar").contains('All Cargoes' );
        cy.get(".navbar").contains('AddCargo' );
        cy.get(".navbar").contains('providers' );
        cy.get('.navbar-nav:nth-child(1)').within(() => {
          cy.get('.nav-item:first').should('contain', 'Home')
          cy.get('.nav-item:nth-child(2)').should('contain', 'All Cargoes')
          cy.get('.nav-item:nth-child(3)').should('contain', 'AddCargo')
          cy.get('.nav-item:nth-child(4)').should('contain', 'providers')
        })
        cy.get('.navbar-nav:nth-child(2)').within(() => {
          cy.get('.nav-item:first').should('contain', 'About')
          cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
        })
      });

      it("Redirects when links are clicked", () => {
        cy.get('[data-test-button1]').click();
        cy.url().should('include','/cargoes' );

        cy.get('[data-test-button2]').click();
        cy.url().should('include','/addCargo' );

        cy.get('[data-test-button3]').click();
        cy.url().should('include','/providers' );

        cy.get('[data-test-button4]').click();
        cy.url().should('include','/about' );

        cy.get('[data-test-button5]').click();
        cy.url().should('include','/contact' );

        /*cy.get('[data-test-button6]').click();
        cy.url().should('include','/login' );*/
        // etc
      });
    })
});
