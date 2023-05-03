describe('Load start screen', () => {
    it('successfully loads', () => {
      cy.visit('/') 
      cy.get('recycling-challenge')
      .contains('Detroit Recycles and you can too!')
    })

    it('start quiz', () => {
      cy.visit('/') 
      cy.get('recycling-challenge')
      .contains('Detroit Recycles and you can too!')
      cy.get('recycling-challenge')
      .get('button.accordion-button').click()
      cy.get('recycling-challenge')
      .contains('Start Quiz')
      cy.get('recycling-challenge')
      .get('cod-button').click()
      cy.get('recycling-challenge')
      .contains('Q: Which of the following plastic items are recyclable?')
    })
})