export default function BaseballGame() {

  const play = (computerInputNumbers, userInputNumbers) => {
    let [strike, ball] = [0, 0];
    for (let i = 0; i < userInputNumbers.length; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }
    return [strike, ball];
  };

  const init = () => {
    const userInp = document.getElementById("user-input");
    const userBtn = document.getElementById("submit");
    userInp.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        getUserInput(userInp.value);
      }
    });
    userBtn.addEventListener('click', (e) => {
      getUserInput(userInp.value);
    });
    saveComAnswerNum();
  };

  const getUserInput = (userInp) => {
    clearResultArea();
    if (checkValidInput(userInp)) {
      const result = play(getComAnswerNum(), userInp);
      printResult(userInp, getCnt(result));
    }
  };

  const checkValidInput = (userInp) => {
    let valid = true;
    if (userInp.length !== 3) {
      alert("숫자를 3개 입력해주세요");
      clearInputArea();
      valid = false;
    } else if ([...(new Set(userInp))].length !== 3) {
      alert("중복되지 않은 숫자를 넣어주세요");
      clearInputArea();
      valid = false;
    } else if (userInp.includes(0)) {
      alert("숫자 0을 제외한 1~9 사이의 수를 입력해주세요");
      clearInputArea();
      valid = false;
    }
    return valid;
  };

  const comAnswerNum = () => {
    let flag = new Array(10).fill(0);
    let res = '';
    while (res.length < 3) {
      let num = Math.floor(Math.random() * 9 + 1);
      while (flag[num] === 1) {
        num = Math.floor(Math.random() * 9 + 1);
      }
      flag[num] = 1;
      res += num;
    }
    return res;
  };

  const saveComAnswerNum = () => {
    const comAns = comAnswerNum();
    localStorage.setItem('answer', comAns);
  };

  const getComAnswerNum = () => {
    return localStorage.getItem('answer');
  };

  const printResult = (userInp, result) => {
    const resultArea = document.getElementById("result");
    const resultPara = document.createElement("p");
    const restartPara = document.createElement("p");
    const restartBtn = document.createElement("span");
    if (userInp === getComAnswerNum()) {
      const resultTxt = '<span>🎉</span> <strong>정답을 맞추셨습니다!</strong> <span>🎉</span>';
      const restartTxt = '<span>게임을 새로 시작하시겠습니까? </span>';
      const btnTxt = '<button id="game-restart-button">재시작</button>';
      resultPara.innerHTML = resultTxt;
      restartPara.innerHTML = restartTxt;
      restartBtn.innerHTML = btnTxt;
      restartBtn.onclick = restart;
      restartPara.appendChild(restartBtn);
      resultArea.appendChild(resultPara);
      resultArea.appendChild(restartPara);
    } else {
      resultPara.innerHTML = result;
      resultArea.appendChild(resultPara);
    }
  };

  const getCnt = (result) => {
    const strike = result[0];
    const ball = result[1];
    let ans = '';
    if (strike === 0) {
      ans = `${ball}볼`;
    } else if (ball === 0) {
      ans = `${strike}스트라이크`;
    } else {
      ans = `${ball}볼 ${strike}스트라이크`;
    }
    return ans;
  };

  const clearInputArea = () => {
    const userInp = document.getElementById("user-input");
    userInp.value = '';
  };

  const clearResultArea = () => {
    const resultArea = document.getElementById("result");
    resultArea.innerHTML = '';
  };

  const restart = () => {
    clearInputArea();
    clearResultArea();
    saveComAnswerNum();
  };

  init();
}

new BaseballGame();
