const quizQuestions = [{
    question: "What city did house music come from?",
    a: "San Francisco",
    b: "New York",
    c: "Miami",
    d: "Los Angeles",
    correct: "b",
} {
    question: "What category of music does house fall under?",
    a: "Dance",
    b: "Hip Hop",
    c: "Rock",
    d: "Country",
    correct: "a",
} {
    question: "Who was the man behind the name Mr. Fingers and tracks such as 'Can You Feel It'?",
    a: "Larry Heard",
    b: "Larry Star",
    c: "Larry Heath",
    d: "Larry Levan",
    correct: "d",
} {
    question: "This man is behind classics such as 'Move Your Body', 'I Got Da Feeling' and 'Mushrooms'. What's his name?",
    a: "Seth Troxler",
    b: "Jeff Mills",
    c: "Robert Hood",
    d: "Marshall Jefferson",
    correct: "d",
} {
    question: "What company designed the legendary tr808 and tr909 dym machines?",
    a: "Moog",
    b: "Ableton",
    c: "Roland",
    d: "Samsung",
    correct: "c",
}];

const quiz = document.getElementById('quiz-app')
const answerOpt = document.querySelectorAll('.answer')
const questionOpt = document.getElementById('questionaire')
const a_text = document.getElementById('a_answer')
const b_text = document.getElementById('b_answer')
const c_text = document.getElementById('c_answer')
const d_text = document.getElementById('d_answer')
const submitBtn = document.getElementById('submit')
let currentQuestion = 0
let score = 0
loadQuestion()

function loadQuestion() {
    deselectAnswers()
    const currentQuestionData = quizQuestions[currentQuestion]
    questionOpt.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d
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