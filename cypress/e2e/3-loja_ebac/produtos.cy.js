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
    
    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscar_produto('Atomic Endurance Running Tee (V-neck)')
        cy.get('.product_title').should('exist')
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitar_produto('Atomic Endurance Running Tee (V-neck)')
        cy.get('.product_title').should('exist')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        produtosPage.buscar_produto('Atomic Endurance Running Tee (V-neck)')
        produtosPage.add_produto_carrinho('XS', 'Blue', 3)
        cy.get('.woocommerce-message').should('contain','3 × “Atomic Endurance Running Tee (V-neck)” foram adicionados no seu carrinho')
    });

    it.only('Deve adicionar o produto ao carrinho pegando da massa de dados em lista', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscar_produto(dados[1].nomeProduto)
            produtosPage.add_produto_carrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain',dados[1].nomeProduto)
        })
    });
});