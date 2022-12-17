import { favorite } from "../data/routes.data"

class favorites{
    //#region Selectors
    get FavesIcon() { return ('.shopping_cart_link') }
    get FavesNotification() { return ('.shopping_cart_badge') }

    get FavoritesItems() { return ('.cart_item') }
    get FavoritesItemsName() { return ('.inventory_item_name') }
    get favoritesQuantity() { return ('.cart_quantity') }

    get addToFavoritesBtns() { return ('#add-to-favorite') }
    // get addToFavoritesBtns() { return ('.btn_inventory') }

    get removeFavoritesItemBtns() { return ('//button[text()="Remove"]') }
    // get removeFavoriteItemBtn() { return ('.Favorites_button') }
    
    get removeQualityFittedHatBtn() { return ('#remove-sauce-labs-backpack') }
    get removedCartItem() { return ('.removed_cart_item') }

    get checkOutBtn() { return ('#checkout') }
    //#endregion

    //#region Methods
    addToCart(itemName){
        let addToCartBtn = `#add-to-cart-${this.applySelectorFormat(itemName)}`

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }

    removeFromCart(itemName){
        let removeFromCartBtn = `#remove-${this.applySelectorFormat(itemName)}`

        cy.get(removeFromCartBtn).should('be.visible')
        cy.get(removeFromCartBtn).click()
    }

    navigateToCart(){
        cy.get(this.cartIcon).click()
    }

    applySelectorFormat(itemName){
        return itemName.toLowerCase().replaceAll(' ', '-')
    }
    //#endregion
}
export default new favorites()