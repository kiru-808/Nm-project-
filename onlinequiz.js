/ online_quiz.js
import readline from "readline";

const quiz = [
  {
    question: "1. Which language runs in a web browser?",
    options: ["A) Java", "B) C", "C) Python", "D) JavaScript"],
    answer: "D"
  },
  {
    question: "2. What does HTML stand for?",
    options: [
      "A) Hyper Trainer Marking Language",
      "B) Hyper Text Markup Language",
      "C) Hyper Text Marketing Language",
      "D) Hyper Tool Multi Language"
    ],
    answer: "B"
  },
  {
    question: "3. What does CSS stand for?",
    options: [
      "A) Creative Style Sheets",
      "B) Cascading Style Sheets",
      "C) Colorful Style Sheets",
      "D) Computer Style Sheets"
    ],
    answer: "B"
  },
  {
    question: "4. What year was JavaScript launched?",
    options: ["A) 1996", "B) 1995", "C) 1994", "D) 1997"],
    answer: "B"
  },
  {
    question: "5. Which company developed Java?",
    options: ["A) Microsoft", "B) Sun Microsystems", "C) IBM", "D) Google"],
    answer: "B"
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let current = 0;

function askQuestion() {
  if (current < quiz.length) {
    const q = quiz[current];
    console.log("\n" + q.question);
    q.options.forEach(opt => console.log(opt));
    rl.question("Your answer (A/B/C/D): ", ans => {
      if (ans.trim().toUpperCase() === q.answer) {
        console.log("✅ Correct!");
        score++;
      } else {
        console.log(❌ Wrong! Correct answer is ${q.answer});
      }
      current++;
      askQuestion();
    });
  } else {
    console.log("\n🎉 Quiz Completed!");
    console.log(Your final score is ${score} / ${quiz.length});
    if (score === quiz.length) {
      console.log("🌟 Excellent! Perfect score!");
    } else if (score >= quiz.length / 2) {
      console.log("👍 Good job! You did well!");
    } else {
      console.log("💪 Keep practicing!");
    }
    rl.close();
  }
}

console.log("🧠 Welcome to the Node.js Online Quiz!");
askQuestion();