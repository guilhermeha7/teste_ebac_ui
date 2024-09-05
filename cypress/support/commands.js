Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
	cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('cadastrar', (email, senha, primeiro_nome, segundo_nome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(primeiro_nome)
    cy.get('#account_last_name').type(segundo_nome)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('preencher_detalhes_conta', (primeiro_nome, segundo_nome, display_name) => {
    cy.get('#account_first_name').type(primeiro_nome)
    cy.get('#account_last_name').type(segundo_nome)
    cy.get('#account_display_name').type(display_name)
    cy.get('.woocommerce-Button').click()
})