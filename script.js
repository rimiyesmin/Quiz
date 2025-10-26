// 50 Math Questions (Easy → Hard)
const questions = [
  // Easy
  { question: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "5 - 3 = ?", options: ["2", "3", "1", "4"], answer: "2" },
  { question: "3 × 2 = ?", options: ["5", "6", "4", "3"], answer: "6" },
  { question: "10 ÷ 2 = ?", options: ["2", "4", "5", "6"], answer: "5" },
  { question: "7 + 3 = ?", options: ["8", "9", "10", "11"], answer: "10" },
  // Medium
  { question: "12 ÷ 3 = ?", options: ["4", "3", "6", "5"], answer: "4" },
  { question: "15 - 7 = ?", options: ["8", "7", "9", "6"], answer: "8" },
  { question: "6 × 3 = ?", options: ["18", "16", "20", "12"], answer: "18" },
  { question: "9 + 8 = ?", options: ["17", "16", "18", "15"], answer: "17" },
  { question: "14 ÷ 7 = ?", options: ["1", "2", "3", "4"], answer: "2" },
  // Hard
  { question: "25 × 4 = ?", options: ["100", "90", "95", "80"], answer: "100" },
  { question: "49 ÷ 7 = ?", options: ["6", "7", "8", "9"], answer: "7" },
  { question: "36 ÷ 6 = ?", options: ["5", "6", "7", "8"], answer: "6" },
  { question: "7 × 8 = ?", options: ["54", "56", "58", "49"], answer: "56" },
  { question: "81 ÷ 9 = ?", options: ["8", "9", "10", "7"], answer: "9" },
  // … continue filling up to 50 questions, gradually harder
];

// Variables
let currentQuestion = 0;
let score = 0;
let wrongCount = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");

// Load a question
function loadQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = questions[currentQuestion].options[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
    btn.onclick = () => checkAnswer(btn, btn.textContent);
  });
}

// Check the answer
function checkAnswer(btn, selected) {
  optionBtns.forEach(b => b.disabled = true);

  if (selected === questions[currentQuestion].answer) {
    score++;
    btn.classList.add("correct");
  } else {
    wrongCount++;
    btn.classList.add("wrong");
    // Show correct button
    optionBtns.forEach(b => {
      if (b.textContent === questions[currentQuestion].answer) {
        b.classList.add("correct");
      }
    });
  }

  // Check if user reached 3 wrong answers
  setTimeout(() => {
    currentQuestion++;
    if (wrongCount >= 3 || currentQuestion >= questions.length) {
      // Quiz over
      questionEl.textContent = "Quiz Over!";
      document.querySelector(".options").style.display = "none";
      scoreEl.textContent = `Your score: ${score}/${questions.length}`;
    } else {
      loadQuestion();
    }
  }, 1000);
}

// Start the quiz
loadQuestion();
