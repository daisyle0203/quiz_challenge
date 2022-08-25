let problem1 = {
    question: "1. What gives a whiskey sour its frothy top?",
    choices: ["Marshmallow", "Lemon juice", "Egg white", "Cream"],
    answer: "Egg white",
}
let problem2 = {
    question:
        "2. Which destination shares its name with a cocktail containing whiskey and sweet vermouth?",
    choices: ["Moscow Mule", "Cuba Libre", "Manhattan", "Panama"],
    answer: "Manhattan",
}
let problem3 = {
    question: "3. What transforms a Classic Martini to a Dirty Martini?",
    choices: ["Tomato juice", "Lemon juice", "Lime juice", "Olive juice"],
    answer: "Olive juice",
}
let problem4 = {
    question: "4. If you mix Guinness and Champagne, what cocktail do you get?",
    choices: ["Black Jack", "Black Russian", "Black Velvet", "Black Widow"],
    answer: "Black Velvet",
}
let problem5 = {
    question:
        "5. Which classic cocktail includes vodka, triple sec, cranberry juice, and lime juice?",
    choices: ["Old Fashioned", "Mojito", "Margarita", "Cosmopolitan"],
    answer: "Cosmopolitan",
}

let problems = [problem1, problem2, problem3, problem4, problem5]
let counter = 0
let currentProblem = problems[counter]

function problemGenerator(problem) {
    let questionEl = document.querySelector("#question")
    let choicesEl = Array.from(document.querySelectorAll(".choice"))
    questionEl.textContent = problem.question
    for (let i = 0; i < problem.choices.length; i++) {
        choicesEl[i].textContent = i + 1 + ". " + problem.choices[i]
    }
}
problemGenerator(currentProblem)

let containerEl = document.querySelector(".container")
containerEl.addEventListener("click", function (event) {
    let element = event.target

    if (element.matches(".choice")) {
        let selection = element.textContent.substring(3)
        console.log(selection)
        console.log(currentProblem.answer)
        if (selection !== currentProblem.answer) {
            // incorrect, reduce timer by 10 sec
            console.log("nay")
        }
        if (counter < problems.length - 1) {
            counter++
            currentProblem = problems[counter]
            problemGenerator(currentProblem)
        } else {
            location.href = './result.html';
        }
    }
})

