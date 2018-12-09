
describe("Manage cargoes page", () => {

    beforeEach(() => {
        // Delete all cargoes in the API's datastore
        cy.request('http://localhost:3000/cargoAll/')
          .its('body')
          .then( (cargoes) => {
            cargoes.forEach( (element) => {
                cy.request('DELETE',
                   'http://localhost:3000/cargo/' + element._id)
             });
          })
          // Populate API's datastore
          cy.fixture('cargoes')
            .then((cargoes) => {
              cargoes.forEach((cargo) => {
                  cy.request('POST',
                     'http://localhost:3000/cargo/', cargo )
                })
          })
      cy.visit("http://localhost:8080/?#/cargoes");
      cy.get('.navbar-nav:nth-child(1)').
      find('.nav-item:nth-child(2)').click()

     });

  it("allows a donation to be deleted", () => {
    cy.get('tbody').find('tr').should('have.length', 10)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(7)').click()
    // Click confirmation button
    //cy.get('button').contains('[data-test-buttonDelete]').click()
    cy.get('button').contains('Delete').click()
    cy.get('button').contains('OK').click()
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
