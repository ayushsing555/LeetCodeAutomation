const Page = require("./page.cjs")

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[@id='id_login']");
    }

    get inputPassword () {
        return $("//input[@id='id_password']");
    }

    get btnSubmit () {
        return $("//button[@id='signin_btn']");
    }

    get btnSign() {
        return $("//span[normalize-space()='Sign in']");
    }

    dialogueBox =   {
        get LoginBox() {
            return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]")
        }
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async LoginBtn() {
        await this.btnSign.click();
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    Open (path) {
        return super.open(path);
    }
}

module.exports = new LoginPage;
