const { default: favoritesPage } = require("../../page/favorites.page")

    describe('Favorites', () => {
        beforeEach(() => {
            cy.visit('/')
        })
    
        it('Add a single product to cart', () => {
            Auth.login('Hdchristian@outlook.com','Project12345')
    
            Cart.addToFavorites('Quality Fitted Hat')
            Cart.navigateToFavorites()
    
            cy.get(CartPage.favoriteNotification).should('have.text', 1)
            cy.get(Cart.favoriteQuantity).should('have.text', 1)
            cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
            cy.get(Cart.cartItemsName).should('have.text', 'Quality Fitted Hat')
        })
    
        it('Remove one item from cart', () => {
            Auth.login('Hdchristian@outlook.com','Project12345')
    
            Cart.addToCart('Quality Fitted Hat')
            Cart.navigateToCart()
    
            // Assert that there is 1 item in the cart then remove the item
            cy.get(Cart.cartQuantity).should('have.text', 1)
            cy.get(Cart.cartItemsName).should('have.text', 'Quality Fitted Hat')
            cy.get(Cart.removeSauceLabBackPackBtn).click()
    
            // Assert that the item was removed and the cart is empty
            cy.get(Cart.cartItemsName).should('not.exist')
            cy.get(Cart.removedCartItem).should('exist')
        })
    })