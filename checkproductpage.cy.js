describe('Tela de Login - saucedemo.com', () => {
  it('name, desc and add to card should be visible', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_desc').should('be.visible')
    cy.get('[data-test="add-to-cart"]').should('be.visible')

    //cy.get('.shopping_cart_badge').should('have.text', '1')
    //cy.get('#react-burger-menu-btn').click()
    //cy.get('[data-test="logout-sidebar-link"]').click()
    //cy.url().should('eq', 'https://www.saucedemo.com/')

  })
})


//Faça login

//Clique no título do item “Sauce Labs Backpack”

//Verifique se o título, descrição e botão “Add to cart” estão visíveis

//Resultado Esperado: Página de detalhes do produto é exibida com sucesso