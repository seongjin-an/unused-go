const baseUrl = 'http://localhost:3000/unused-go/main'
describe('TopSearch test', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
        cy.waitForReact()
    })
    it('should render TopSearch', () => {
        cy.react('Header')
            .react('FuncButton')
            .should('have.length', 2)
            .first()
            .click()
        cy.react('SearchInput').get('input[type="text"]').first().type('ansj').should('have.value', 'ansj')
        cy.react('CloseSearchButton').click()
    })
})