const Page = require("./page.cjs");
class ListPage extends Page {

    get ListNames() {
        return $$("(//div[@class='panel panel-default'])/div[2]/a/span");
    }

    get btnAddList() {
        return $("(//button[@class='add-list-btn'])[1]");
    }

    get listStatus() {
        return $$("(//div[@class='panel panel-default'])/div[2]/a")
    }

    get QuestionsInList() {
        return $$("(//div[@class='list-group'])[2]/li/span[1]");
    }

    DialogueBox = {
        get AddListContainer() {
            return ("/html[1]/body[1]/div[8]/div[1]/div[2]/div[1]");
        },

        get inputListName() {
            return $("(//input[@placeholder='Enter a name for your list'])[1]");
        },

        get btnConfirm() {
            return $("(//span[contains(@class,'')][normalize-space()='Confirm'])[1]");
        }
    };


    /**
     * define action methods
     */

    async createList(TargetList) {
        await this.btnAddList.click();
        await this.DialogueBox.inputListName.setValue(TargetList);
        await this.DialogueBox.btnConfirm.click();
    }

    open(path) {
        return super.open(path);
    }
}
module.exports = new ListPage();