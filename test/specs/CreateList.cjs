const HomePage = require("../pageobjects/HomePage.cjs");
const ListPage = require("../pageobjects/List.page.cjs");
const ProblemsPage = require("../pageobjects/ProblemPage.cjs");
const singleProblemPage = require("../pageobjects/singleProblem.page.cjs");
describe('LeetCode Automation Test', () => {
    it("should pass for list create and Question add", async () => {

        // Array of Question numbers
        const QuestionNumbers = [2715, 2697, 10, 12];

        // for opening the page to check list
        await ListPage.open("list");

        // giving list name
        const TargetListName = "TestSuiteList";

        // getting the list name available in all lists
        const AvailableLists = await ListPage.ListNames;
        var i = 0;
        for (i = 0; i < AvailableLists.length; i++) {
            let listName = await AvailableLists[i].getText();
            if (listName == TargetListName) {
                break;
            }
        }
        if (i == AvailableLists.length) {

            // creating the new list
            await ListPage.createList(TargetListName);
        }

        // problem page
        await HomePage.Problem();

        // expecting the page containing the url
        await expect(browser).toHaveUrl("https://leetcode.com/problemset/all/");

        // for scrolling the page
        await browser.scroll(0, 100);


        for (var j = 0; j < QuestionNumbers.length; j++) {
            await ProblemsPage.searchQuestion.clearValue();

            // for entering the QuestionNumber in search box
            await ProblemsPage.searchQuestion.setValue(QuestionNumbers[j]);

            // for waiting the change Ques
            await browser.pause(3000);

            // clicking on Question
            await ProblemsPage.QuestionRow.click();

            // expecting the page containing the url
            expect(browser).toHaveUrlContaining("https://leetcode.com/problems/");

            // click on star button
            await singleProblemPage.star();

            // getting available listNames  
            const ListNames = await singleProblemPage.ListName;

            // getting buttons to add or remove Question from that lists
            const ListButton = await singleProblemPage.ListButton;
            for (i = 0; i < ListNames.length; i++) {
                const name = await ListNames[i].getText();
                if (name == TargetListName) {
                    const QuestionStatus = await ListButton[i].getText();
                    if (QuestionStatus == "Add") {
                        await ListButton[i].click();
                        expect(ListButton[i]).toHaveText("Remove");
                    }
                    else {
                        expect(ListButton[i]).toHaveText("Remove");
                    }
                    break;
                }
            }

            // for back browsing
            await browser.back();

            // expecting the page containing the url
            await expect(browser).toHaveUrlContaining("https://leetcode.com/problemset/all/");
        }

    });

    it("should pass for count the solved Question in the targetList", async () => {
        await ListPage.open("list");

        let TargetListName = "Favourite";

        let listStatus = await ListPage.listStatus;


        const AvailableLists = await ListPage.ListNames;
        var i = 0;
        for (i = 0; i < AvailableLists.length; i++) {
            let listName = await AvailableLists[i].getText();
            if (listName == TargetListName) {
                await AvailableLists[i].click();
                expect(listStatus[i]).toHaveAttributeContaining('class', 'active');
                break;
            }
        }

        let QuestionList = await ListPage.QuestionsInList;
        let solved = 0;
        let Attempted = 0;
        let fresh = 0;
        for (i = 0; i < QuestionList.length; i++) {
            let isSolved = await QuestionList[i].getAttribute("class");
            if (isSolved.indexOf("text-success") != -1) {
                solved++;
            }
            else if (isSolved.indexOf("text-info") != -1) {
                Attempted++;
            }
            else {
                fresh++;
            }
        }

        console.log(
            "Solved Ques:" + solved,
            "Attempted Ques:" + Attempted,
            "Fresh Ques" + fresh
        );
    });
});