/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    it('Deve completar o cadastro com sucesso e Deve escrever o primeiro e segundo nome com sucesso', () => {
        var primeiro_nome = faker.person.firstName('female')
        var email = faker.internet.email(primeiro_nome)
        var segundo_nome = faker.person.lastName('female')

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiro_nome)
        cy.get('#account_last_name').type(segundo_nome)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')
    });

    it('Deve completar o cadastro com sucesso e Deve escrever o primeiro e segundo nome com sucesso - Usando comandos customizados', () => {
        var primeiro_nome = faker.person.firstName('female')
        var email = faker.internet.email(primeiro_nome)
        var segundo_nome = faker.person.lastName('female')

        cy.cadastrar(email, 'teste123', primeiro_nome, segundo_nome)
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')
    });

});