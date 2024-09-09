/// <reference types="cypress" />

describe('Teste para o site', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve excluir 2 contatos', () => {
        cy.get('.delete').eq(1).click()
        cy.get('.delete').eq(0).click()
    })

    it('Deve adicionar 2 novos contato', () => {
        cy.get('input[type="text"]').type('Ian Gabriel')
        cy.get('input[type="email"]').type('emailteste@gmail.com')
        cy.get('input[type="tel"]').type('12 34567890')
        cy.get('.adicionar').click()

        cy.get('input[type="text"]').type('Gabriel Ian')
        cy.get('input[type="email"]').type('emailteste2@gmail.com')
        cy.get('input[type="tel"]').type('01 23456789')
        cy.get('.adicionar').click()
    })

    it('Deve editar o primeiro contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Pedro')
        cy.get('input[type="email"]').clear().type('pedrin@gmail.com')
        cy.get('input[type="tel"]').clear().type('23 45678901')
        cy.get('.alterar').click()
    })
})