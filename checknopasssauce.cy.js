describe('Tela de Login - saucedemo.com', () => {
    it('Should be login to platform', () => {
      cy.visit('https://www.saucedemo.com/')
  
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Password is required')
  
  
    })
  })
  