class Authentication{
    
    //#region Selectors
    get userNameField() { return ('input[id="1-email"]') }
    get passwordField() { return ('input[id="1-password"]') }
    get loginBtn() { return ('.auth0-label-submit') }

    get itemNames() { return ('.inventory_item_name') }

    get mainMenuBtn() { return ('#react-burger-menu-btn') }
    get logOutBtn() { return ('#logout_sidebar_link') }
    //#endregion

    //#region Methods
    login(username, password){
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
    }

    logout(){
        cy.get(this.mainMenuBtn).click()
        cy.get(this.logOutBtn).click()
    }
    //#endregion
}
export default new Authentication()