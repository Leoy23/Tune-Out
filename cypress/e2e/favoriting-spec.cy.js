describe('Favorites page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KnvZfZ7vAv1&dmaId=385', {
      statusCode: 200,
      ok: true,
      fixture: '/rapData.json'
    })
  })
  it('should display a message if there are no favorites', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.get('.fav-msg-error').should('exist').and('contain', 'Add some favorites please. . .')
  })

  // it('should display favorited event cards', () => {
  //   cy.intercept('GET', 'https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KnvZfZ7vAv1&dmaId=385', {
  //     statusCode: 200,
  //     ok: true,
  //     fixture: '/rapData.json'
  //   })
  //   cy.visit('http://localhost:3000/home-page')
  //   cy.get('fav-btn').click()
  // })

  it('user should be able to navigate home from favorites page', () => {
    cy.visit('http://localhost:3000/favorites');
    cy.get('.home-link').click();
    cy.url().should('eq', 'http://localhost:3000/home-page');
  });

  // it('if a user removes a favorited event, it no longer appears on the DOM', () => {
  //   cy.visit('http://localhost:3000/home-page');
  //   cy.get('.fav-btn').click();
  //   cy.get('.favorites').click();
  //   cy.get('.delete-fav-btn').click();
  //   cy.get('article').should('not.exist')
  // });
})