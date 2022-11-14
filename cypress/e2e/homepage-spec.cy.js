describe('Landing display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should be able to visit the page and find the header and button', () => {
    cy.get('h1').contains('Tune Out');
    cy.get('.explore-btn').should('exist');
  });

  it('should direct users to home page on click', () => {
    cy.visit('http://localhost:3000/');
    cy.intercept('GET', 'https://app.ticketmaster.com/discovery/v2/', {
      fixture: 'sampleData.json',
    });
    cy.get('.explore-btn').click().get('.home').should('be.visible');
  });
});

describe('Home Display', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://app.ticketmaster.com/discovery/v2/', {
      fixture: 'sampleData.json',
    });
    cy.visit('http://localhost:3000/home-page');
  });

  it('should display a navbar with a title', () => {
    cy.get('.nav-title').should('contain', 'Tune - Out');
  });

  it('should display two navigation links', () => {
    cy.get('.active').should('exist');
    cy.get('[href="/favorites"]').should('exist');
  });

  it('should display an event card for an upcoming event', () => {
    cy.get('.events-container > :nth-child(1)').should(
      'have.class',
      'display-cards'
    );
    cy.get(':nth-child(1) > h3')
      .should('exist')
      .should(
        'contain',
        'Snoop Doggs Holidaze of Blaze with T-Pain, Warren G, & Ying Yang Twin'
      );
    cy.get(':nth-child(1) > p')
      .should('exist')
      .should('contain', 'Date: 2022-12-16');
    cy.get('.events-container > :nth-child(1) > :nth-child(4)')
      .should('exist')
      .should('contain', 'Venue: Tacoma Dome');
    cy.get('.events-container > :nth-child(1) > :nth-child(5)')
      .should('exist')
      .should('contain', 'Location: Tacoma, WA');
    cy.get(':nth-child(1) > .ticket-links > i')
      .should('exist')
      .should('contain', 'GET TICKETS HERE!');
    cy.get(':nth-child(1) > .fav-btn')
      .should('exist')
      .should('contain', 'Fave');
  });
});
