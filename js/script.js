const inputNumero = document.getElementById("userInput");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let countdownTimeout;

function startCountdown() {
  let count = 5;
  countdown.textContent = `Cuenta atrás: ${count} segundos`;
  countdownTimeout = setInterval(() => {
    count--;
    countdown.textContent = `Cuenta atrás: ${count} segundos`;
    if (count === 0) {
      clearInterval(countdownTimeout);
      evaluateResult();
    }
  }, 1000);
}

function evaluateResult() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const userNumber = parseInt(inputNumero.value);
  if (userNumber === randomNumber) {
    result.innerHTML = `
    <p id="win">Enhorabuena, has salvado el mundo 👑</p>
    <p class="textoSecundario">Tu número: ${userNumber}, número correcto: ${randomNumber}</p>
    `;
  } else {
    result.innerHTML = `
    <p id="lose">¡La bomba ha estallado!</p>
    <p class="textoSecundario">El número correcto era ${randomNumber}. Tu número: ${userNumber}</p>
    `;
  }
}

restart.addEventListener("click", () => {
  clearInterval(countdownTimeout);
  inputNumero.disabled = false;
  inputNumero.value = "";
  countdown.textContent = "";
  result.textContent = "";
});

inputNumero.addEventListener("change", () => {
  if (inputNumero.value > 3) {
    countdown.textContent = `
      Debes escribir un número del 1 al 3.
      `;
  } else {
    inputNumero.disabled = true;
    startCountdown();
  }
});
