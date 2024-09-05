class ProdutosPage {

    visitar_url() {
        cy.visit('produtos')
    }

    buscar_produto(nome_produto) {
        cy.get('[type="text"]').eq(1).type(nome_produto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }s

    buscar_produto_lista(id) {
        cy.get('.product-block').eq(id).click()
    }

    visitar_produto() {

    }

    add_produto_carrinho() {

    }

}

export default new ProdutosPage()