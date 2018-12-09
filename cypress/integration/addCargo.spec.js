describe("add Cargo page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/?#/addCargo");
    // Click Donate navbar link
    /*cy.get('.navbar-nav:nth-child(1)').
    find('.nav-item:nth-child(3)').click()*/
  });


  it("shows correct message in name", () => {
    // Fill out web form
    cy.get('[data-test-name]').should('contain','name');
  });

  it("shows correct message in price", () => {
    // Fill out web form
    cy.get('[data-test-price]').should('contain','price');
  });

  it("shows correct message in amount", () => {
    // Fill out web form
    cy.get('[data-test-amount]').should('contain','amount');
  });

  it("shows correct message in providerID", () => {
    // Fill out web form
    cy.get('[data-test-providerID]').should('contain','providerID');
  });

  it("shows correct message in providerName", () => {
    // Fill out web form
    cy.get('[data-test-providerName]').should('contain','providerName');
  });

  it("shows correct message in providerType", () => {
    // Fill out web form
    cy.get('[data-test-providerType]').should('contain','providerType');
  });

  it("allows a valid cargo to be submitted", () => {
    // Fill out web form

    cy.get('input[data-test=price]').type(555);
    cy.get('input[data-test=amount]').type(555);
    cy.get('input[data-test=name1]').type('chicken');
    cy.get('input[data-test=providerID]').type('5bc9066a5a6760bc51a7f9a2');
    cy.get('input[data-test=providerName]').type('Sam');
    cy.get('input[data-test=providerType]').type('user');
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click();
    cy.contains('Operation succeed!').should('exist');

  });



  it("shows error messages for incomplete form fields", () => {
    cy.get('input[data-test=price]').type(555);
    cy.get('input[data-test=amount]').type(555);
    cy.get('input[data-test=providerID]').type('5bc9066a5a6760bc51a7f9a2');
    cy.get('input[data-test=providerName]').type('Sam');
    cy.get('input[data-test=providerType]').type('user');
    cy.get('.error').should('exist')
  });



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

})
