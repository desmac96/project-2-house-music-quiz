// jshint esversion :6 
console.log("questions.js has been loaded successfully.");

// Questions array imported from questions.js 
import {
    quizQuestions
} from "./questions.js";

// DOM Elements
const quizForm = document.getElementById('quiz-form');
const quiz = document.getElementById('quiz-app');
const answerOpts = document.querySelectorAll('.answer');
const questionOpt = document.getElementById('questionaire');
const a_text = document.getElementById('a_answer');
const b_text = document.getElementById('b_answer');
const c_text = document.getElementById('c_answer');
const d_text = document.getElementById('d_answer');
const submitBtn = document.getElementById('submit');
const scoreCard = document.getElementById('score-card');

// Initialize Variables
let currentQuestionIndex = 0;
let score = 0;

//Event listener for the submit button
submitBtn.addEventListener("click", handleAnswerSubmission);

// Load the first question
function loadQuestion() {
    deselectAnswers();
    const currentQuestionData = quizQuestions[currentQuestionIndex];
    questionOpt.innerText = currentQuestionData.question;
    a_text.innerText = currentQuestionData.options[0];
    b_text.innerText = currentQuestionData.options[1];
    c_text.innerText = currentQuestionData.options[2];
    d_text.innerText = currentQuestionData.options[3];
}

// Clear all selected answers
function deselectAnswers() {
    answerOpts.forEach(answerE1 => answerE1.checked = false);
}

// Get the selected answer
function getSelectedOpt() {
    let selectedAnswer;
    answerOpts.forEach(answerE1 => {
        if (answerE1.checked) {
            selectedAnswer = answerE1.id;
        }
    });
    return selectedAnswer;
}
// Handle the submission of an answer
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
// Check if the selected answer is correct
function checkAnswer(selectedAnswer) {
    if (quizQuestions[currentQuestionIndex]) {
        const correctAnswerIndex = quizQuestions[currentQuestionIndex].correct;
        if (Number(selectedAnswer) === correctAnswerIndex) {
            incrementScore();
        }
    }

}
// Increment score
function incrementScore() {
    score++;
    scoreCard.innerText = score;
}
// Display final results and show the restart button
function displayResults() {
    quiz.innerHTML = `
        <h2>You scored ${score} out of ${quizQuestions.length}</h2>
        <button id="restartBtn" class="btn">Restart Game</button>
    `;
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.onclick = () => location.reload();
    submitBtn.style.display = 'none';
}

// Initial call to load the first question
loadQuestion();