import isCheckValidUserInput from "./check_valid.js";
import {
  MIN_NUMBER,
  MAX_NUMBER,
  MAX_LENGTH,
  CORRECT_ANSWER,
  ASK_RESTART,
  NO_CORRECT_ANSWER,
} from "./constants.js";

const randomComputerInputNumber = () => {
  const flag = new Array(10).fill(0);
  let computerInputNumber = "";
  while (computerInputNumber.length < MAX_LENGTH) {
    let num = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    while (flag[num] === 1) {
      num = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    }
    flag[num] = 1;
    computerInputNumber += num;
  }
  return computerInputNumber;
};

const saveRandomComputerInputNumber = () => {
  const computerNumber = randomComputerInputNumber();
  localStorage.setItem("computerInputNumber", computerNumber);
};

const getRandomComputerInputNumber = () => {
  return localStorage.getItem("computerInputNumber");
};

const compareInputs = (computerInputNumbers, userInputNumbers) => {
  let [ball, strike] = [0, 0];
  for (let i = 0; i < MAX_LENGTH; i += 1) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strike += 1;
    } else if (userInputNumbers.includes(computerInputNumbers[i])) {
      ball += 1;
    }
  }
  return [ball, strike];
};

const clean = () => {
  const userInput = document.getElementById("user-input");
  userInput.value = "";
  const result = document.getElementById("result");
  result.textContent = "";
};

const restart = () => {
  saveRandomComputerInputNumber();
  clean();
};

const printResult = ([ball, strike]) => {
  const result = document.getElementById("result");
  if (ball === 0 && strike === 0) {
    result.innerText = NO_CORRECT_ANSWER;
  } else if (strike === 3) {
    result.innerHTML = CORRECT_ANSWER + ASK_RESTART;
    const restartButton = document.getElementById("game-restart-button");
    restartButton.onclick = restart;
  } else if (ball === 0) {
    result.innerText = `${strike}스트라이크`;
  } else if (strike === 0) {
    result.innerText = `${ball}볼`;
  } else {
    result.innerText = `${ball}볼 ${strike}스트라이크`;
  }
};

const play = (computerInputNumbers, userInputNumbers) => {
  printResult(compareInputs(computerInputNumbers, userInputNumbers));
};

const getUserInput = () => {
  const userInputButton = document.getElementById("submit");
  const userInput = document.getElementById("user-input");
  userInputButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isCheckValidUserInput(userInput.value)) {
      userInput.value = "";
    } else {
      play(getRandomComputerInputNumber(), userInput.value);
    }
  });
};

export default function BaseballGame() {
  this.init = () => {
    saveRandomComputerInputNumber();
    getUserInput();
  };

  this.init();
}

new BaseballGame();
