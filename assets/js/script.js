console.log("questions.js has been loaded successfully.");

// Questions array imported from questions.js //
import { quizQuestions } from "./questions.js";

const quiz = document.getElementById('quiz-app');
const answerOpts = document.querySelectorAll('.answer');
const questionOpt = document.getElementById('questionaire');
const a_text = document.getElementById('a_answer');
const b_text = document.getElementById('b_answer');
const c_text = document.getElementById('c_answer');
const d_text = document.getElementById('d_answer');
const submitBtn = document.getElementById('submit');
const scoreCard = document.getElementById('score-card');

let currentQuestionIndex = 0;
let score = 0;

submitBtn.addEventListener("click", handleAnswerSubmission);

function loadQuestion() {
    deselectAnswers();
    const currentQuestionData = quizQuestions[currentQuestionIndex];
    questionOpt.innerText = currentQuestionData.question;
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
}

function deselectAnswers() {
    answerOpts.forEach(answerE1 => answerE1.checked = false);
}

function getSelectedOpt() {
    let selectedAnswer;
    answerOpts.forEach(answerE1 => {
        if (answerE1.checked) {
            selectedAnswer = answerE1.id;
        }
    });
    return selectedAnswer;
}

function handleAnswerSubmission() {
    const selectedAnswer = getSelectedOpt();
    if (selectedAnswer) {
        checkAnswer(selectedAnswer);
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            displayResults();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function checkAnswer(selectedAnswer) {
    const correctAnswerId = quizQuestions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswerId) {
        incrementScore();
    }
}

function incrementScore() {
    score++;
    scoreCard.innerText = score;
}

function displayResults() {
    quiz.innerHTML = `<h2>You scored ${score} out of ${quizQuestions.length}</h2>`;
}

// Initial call to load the first question
loadQuestion();
