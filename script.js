

const questionContainers = document.querySelectorAll(".question-container");
const hiddenContainers = document.querySelectorAll(".hidden-container");
const cursors = document.querySelectorAll(".arrow-down");
const questions = document.querySelectorAll(".question");


for (quesContanier of questionContainers) {

    quesContanier.addEventListener("click", function (e) {
        let questTarget = e.target;
        let cursor = questTarget.children[0].children[1];        let hiddenContainer = questTarget.children[1];
        let question = questTarget.children[0].children[0];

        if (hiddenContainer.classList.contains("open-close")) {

            hiddenContainer.classList.toggle("open-close");
            cursor.classList.toggle("turn-cursor");
            question.classList.toggle("question-active");
        }
        else {

            hiddenContainers.forEach(hiddenContain => {
                hiddenContain.classList.remove("open-close");
            });
            cursors.forEach(cursorContain => {
                cursorContain.classList.remove("turn-cursor");
            });
            questions.forEach(question => {
                question.classList.remove("question-active");
            });
            question.classList.add("question-active");
            cursor.classList.add("turn-cursor");
            hiddenContainer.classList.add("open-close");
        }



    });
}