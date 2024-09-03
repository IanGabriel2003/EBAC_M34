<reference types="cypress" />

describe('Teste para o site', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar o primeiro 1 ALTERAÇÃO', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').first().click()
        cy.get('.edit').click()
        cy.get('input[type="text"]').type('Nome Teste')
        cy.get('input[type="email"]').type('emailteste@gmail.com')
        cy.get('input[type="tel"]').type('01 23456789')
        cy.get('.alterar').click()
    })

    it('Deve excluir o 2 REMOÇÃO DE UM CONTATO', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').second().click()
        cy.get('.delete').click()
    })

    it('Deve adicionar 1 INLCUSÃO', () => {
        cy.get('input[type="text"]').type('Nome Teste2')
        cy.get('input[type="email"]').type('emailteste2@gmail.com')
        cy.get('input[type="tel"]').type('12 34567890')
        cy.get('.adicionar').click()
    })
})