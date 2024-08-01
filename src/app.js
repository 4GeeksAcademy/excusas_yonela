// Importaciones necesarias
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];

  return excuse;
}

function updateExcuse() {
  console.log("Actualizando excusa...");
  const excuseElement = document.getElementById("excuse");
  if (excuseElement) {
    excuseElement.innerHTML = generateExcuse();
  } else {
    console.log("No se encontró el elemento con id 'excuse'");
  }
}

window.onload = function() {
  console.log("Hello Rigo from the console!");
  updateExcuse();

  const generateExcuseButton = document.getElementById("generateExcuseButton");
  if (generateExcuseButton) {
    generateExcuseButton.onclick = updateExcuse;
  } else {
    console.log("No se encontró el botón con id 'generateExcuseButton'");
  }
};
