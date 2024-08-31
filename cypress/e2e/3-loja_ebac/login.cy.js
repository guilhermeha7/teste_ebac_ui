
/// <reference types="cypress"/>

describe('AC1: Após inserir dados válidos o usuário deve ser direcionado para a tela "Minha Página"', () => {

    it('Login com email e senha válidos', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('gha@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        //Resultado Esperado
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gha (não é gha? Sair)')
    })

})