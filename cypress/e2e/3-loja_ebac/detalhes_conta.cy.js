/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Detalhes da Conta', () => {
    
    beforeEach(() => {
        cy.visit("minha-conta/edit-account")
        cy.login(perfil.usuario,perfil.senha)
    });
    
    it('Deve completar detalhes da conta com sucesso', () => {
        cy.preencher_detalhes_conta('Guilherme','do Amaral','gha')
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')
    });
});