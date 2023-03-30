describe('Load start screen', () => {
    it('successfully loads', () => {
      cy.visit('/') 
      cy.get('recycling-challenge')
      .contains('Detroit Recycles and you can too!')
    })
})