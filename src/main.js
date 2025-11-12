import { QUIZ } from "./quiz.js";
import { defaultState, answerCorrect, answerWrong } from "./state.js";
import { save, load } from "./storage.js";
import { renderHUD, renderQuestion } from "./ui.js";

let state = load(defaultState);
let idx = 0;

function nextQuestion() {
  if (idx >= QUIZ.length) idx = 0; // loop simples
  renderQuestion(QUIZ[idx], (optIndex) => {
    if (optIndex === QUIZ[idx].answer) {
      answerCorrect(state);
    } else {
      answerWrong(state);
      alert("Explicação: " + QUIZ[idx].explain);
    }
    save(state);
    renderHUD(state);
    idx++;
    nextQuestion();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderHUD(state);
  nextQuestion();
});
