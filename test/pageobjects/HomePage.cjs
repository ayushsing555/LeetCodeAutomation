const Page = require("./page.cjs");
class HomePage extends Page{

    /**
     * define selectors using getter methods
     */
    get btnProblems() {
        return $("//a[normalize-space()='Problems']");
    }

    /**
     * define action methods
     */

    async Problem() {
        await this.btnProblems.click();
    }
}
module.exports = new HomePage();