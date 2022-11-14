describe('Error handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/NotFound')
  })

  it('should display the Not Found component', () => {
    cy.get('[class*=error-wrapper]')
    .should('exist')
    .get('h4')
    .should('exist')
    .contains('404')
    .get('h2')
    .should('exist')
    .contains('The beat ain\'t over')
    .get('h2')
    .should('exist')
    .contains('YET')
    .get('h5')
    .should('exist')
    .contains('Let\'s take you back home . . .')
  })
})