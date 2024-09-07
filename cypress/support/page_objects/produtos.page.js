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

    visitar_produto(nome_produto) {
        //cy.visit(`produtos/${nomeProduto}`)
        const url_formatada = nome_produto.replace(/ /g, '-')
        cy.visit(`produtos/${url_formatada}`)
    }   

    add_produto_carrinho(tamanho, cor, qtd) {
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()