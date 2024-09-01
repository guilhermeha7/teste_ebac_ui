
/// <reference types="cypress"/>

describe('AC1: Após inserir dados válidos o usuário deve ser direcionado para a tela "Minha Página"', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Login com usuário e senha válidos', () => {
        //Passo a Passo
        cy.get('#username').type('gha@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        //Resultado Esperado
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gha (não é gha? Sair)')
    })

describe('AC2: Após inserir um campo inválido deve exibir uma mensagem de erro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Login com email inválido e senha válida', () => {
        //Passo a Passo
        cy.get('#username').type('rqwerqwrwqer@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        
        //Resultado Esperado
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
    });

    it('Login com email válido e senha inválida', () => {
        //Passo a Passo
        cy.get('#username').type('gha@teste.com')
        cy.get('#password').type('rwewrewrewre')
        cy.get('.woocommerce-form > .button').click()
        
        //Resultado Esperado
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail gha@teste.com está incorreta')
    });

});

})