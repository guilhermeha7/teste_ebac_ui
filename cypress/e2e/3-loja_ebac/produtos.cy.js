/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').eq(0).click()
    });
    
});