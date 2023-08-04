const Page = require("./page.cjs");
class SingleProblemPage extends Page{

    /**
     * define selectors using getter methods
     */
    get ListName() {
        return $$('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[1]/div[1]/span[1]');
    }

    get ListButton() {
        return $$('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div/div[1]/div[2]');
    }

    get PremiumDailogue() {
        return $("(//div[@class='flex max-w-[400px] flex-col items-center'])[1]")
    }

    get btnStar() {
        return $("(//div[@class='mt-3 flex items-center space-x-4'])[1]/div[3]/div/div/div/div");
    }

    get btnCreateList() {
        return $("(//div[contains(text(),'Create a new list')])[1]");
    }

    get premiumBtn() {
        return $("(//a[normalize-space()='Subscribe'])[1]");
    }

    /**
     * define action methods
     */


    async star() {
        await this.btnStar.click();
    }

    async createList() {
        await this.btnCreateList.click();
    }
}
module.exports = new SingleProblemPage();