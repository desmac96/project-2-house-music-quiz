console.log("questions.js has been loaded successfully.");


// Questions array imported from questions.js //
import {
    quizQuestions
} from "./questions.js";

const quiz = document.getElementById('quiz-app')
const answerOpt = document.querySelectorAll('.answer')
const questionOpt = document.getElementById('questionaire')
const a_text = document.getElementById('a_answer')
const b_text = document.getElementById('b_answer')
const c_text = document.getElementById('c_answer')
const d_text = document.getElementById('d_answer')
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener("click", loadNextQuestion);
let currentQuestion = 0
let score = 0
loadQuestion()

function loadNextQuestion() {
    currentQuestion = currentQuestion + 1
    loadQuestion();
}

function loadQuestion() {
    deselectAnswers()
    const currentQuestionData = quizQuestions[currentQuestion]
    questionOpt.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d;
}

function deselectAnswers() {
    answerOpt.forEach(answerEL => answerEL.checked = false)
}

function getSelectedOpt() {
    let answer
    answerOpt.forEach(answerEL => {
        if (answerEL.checked) {
            answer = answerEL
        }
    })
}

function checkAnswer() {

    if (this.id == myQuestions[currentQuestionIndex].correctAnswer) {
        this.classList.add("correct");
        incrementScore();
    } else {
        this.classList.add("incorrect");
    }

    setTimeout(() => {
        this.classList.remove("correct");
        this.classList.remove("incorrect");
        setNextQuestion();
    }, 1000);
    currentQuestionIndex++;
}