/// <reference types="cypress" />

describe('Teste para o site', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar o primeiro contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').first().click()
        cy.get('.edit').click()
        cy.get('input[type="text"]').clear().type('Nome Teste')
        cy.get('input[type="email"]').clear().type('emailteste@gmail.com')
        cy.get('input[type="tel"]').clear().type('01 23456789')
        cy.get('.alterar').click()
    })

    it('Deve excluir o segundo contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').eq(1).click()
        cy.get('.delete').click()
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Nome Teste2')
        cy.get('input[type="email"]').type('emailteste2@gmail.com')
        cy.get('input[type="tel"]').type('12 34567890')
        cy.get('.adicionar').click()
    })
})