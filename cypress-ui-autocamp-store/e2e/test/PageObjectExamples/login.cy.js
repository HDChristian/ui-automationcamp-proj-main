/// <reference types="cypress"/>
import Auth from '../../page/auth.page'
import routesData from '../../data/routes.data'

describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Login with a valid user', () => {
        Auth.login('hdchristian@outlook.com','Project1234')
        cy.get(Auth.itemNames).should('be.visible')
        cy.TestCommand()

        cy.url().should('contain', routesData.product)
    })
})