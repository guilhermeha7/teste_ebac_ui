/// <reference types="cypress"/>
import produtosPage from "../../support/page_objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitar_url()
    });
    
    it('Deve selecionar um produto da lista', () => {
        //cy.get('.product-block').eq(0).click()
        produtosPage.buscar_produto_lista(0)
    });
    
    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscar_produto('Atomic Endurance Running Tee (V-neck)')
        cy.get('.product_title').should('exist')
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar o produto ao carrinho', () => {
        
    });
});