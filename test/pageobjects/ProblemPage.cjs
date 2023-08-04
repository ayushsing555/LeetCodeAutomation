const Page = require("./page.cjs");
class ProblemsPage extends Page{

    /**
     * define selectors using getter methods
     */
    get searchQuestion() {
        return $("(//input[@placeholder='Search questions'])[1]");
    }

    get QuestionRow() {
        return $("(//div[@role='rowgroup'])[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/a");
    }
}
module.exports = new ProblemsPage();