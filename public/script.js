import { greet, nextCount } from "./utils.js";

const nameInput = document.getElementById("name-input");
const greetBtn = document.getElementById("greet-btn");
const greeting = document.getElementById("greeting");
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc-btn");
const decBtn = document.getElementById("dec-btn");

let count = 0;

greetBtn.addEventListener("click", () => {
  greeting.textContent = greet(nameInput.value);
});

// function updateCount(step) {
//   count = nextCount(count, step);
//   countEl.textContent = String(count);
// }

incBtn.addEventListener("click", () => updateCount(1));
decBtn.addEventListener("click", () => updateCount(-1));
