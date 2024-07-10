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
    // console log to debug question loading //
    console.log(`Loading question ${currentQuestionIndex + 1}: ${quizQuestions[currentQuestionIndex].question}`);
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
    // console log to fix q1 bug //
    console.log(`Selected answer: ${selectedAnswer}`);
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
    // console log for q1 bug //
    console.log(`Checking answer: ${selectedAnswer} against correct answer: ${correctAnswerId}`);
    if (selectedAnswer === correctAnswerId) {
        incrementScore();
    }
}

function incrementScore() {
    score++;
    scoreCard.innerText = score;
    // console log for q1 buf //
    console.log(`Score incremented: ${score}`);
}

function displayResults() {
    quiz.innerHTML =` <h2>You scored ${score} out of ${quizQuestions.length}</h2>;
    <button id="play-again" class="btn">Play Again</button>
    `;
    document.getElementById('play-again').addEventListener('click', resetQuiz);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreCard.innerText = score;
    quiz.innerHTML = `
        <div class="quiz_heading">
            <h2 id="questionaire">Question Section</h2>
            <ul>
                <li>
                    <input type="radio" name="answer" id="a_answer" class="answer">
                    <label for="a_answer" id="a_answer_label">Answer</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="b_answer" class="answer">
                    <label for="b_answer" id="b_answer_label">Answer</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="c_answer" class="answer">
                    <label for="c_answer" id="c_answer_label">Answer</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="d_answer" class="answer">
                    <label for="d_answer" id="d_answer_label">Answer</label>
                </li>
            </ul>
        </div>
    `;
    loadQuestion();
    submitBtn.addEventListener("click", handleAnswerSubmission);
}

// Initial call to load the first question
loadQuestion();
