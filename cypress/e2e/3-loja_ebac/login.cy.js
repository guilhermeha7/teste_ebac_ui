/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login"', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    it('Deve fazer o login com sucesso', () => {
        //Passo a Passo
        cy.get('#username').type('gha@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        //Resultado Esperado
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gha (não é gha? Sair)')
    });

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        //Passo a Passo
        cy.get('#username').type('rqwerqwrwqer@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
            
        //Resultado Esperado
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
    });
    
    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        //Passo a Passo
        cy.get('#username').type('gha@teste.com')
        cy.get('#password').type('rwewrewrewre')
        cy.get('.woocommerce-form > .button').click()
            
        //Resultado Esperado
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail gha@teste.com está incorreta')
    });
    
    it('Deve fazer o login com sucesso - Usando massa de dados', () => {
        //Passo a Passo
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
            
        //Resultado Esperado
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gha (não é gha? Sair)')   
    });

    it('Deve fazer login com sucesso - Usando comandos customizados', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gha (não é gha? Sair)')   
    });
    
})