const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const MAX_LENGTH = 3;

const USER_INPUT_INCLUDE_ZERO = "0은 사용할 수 없습니다.";
const USER_INPUT_NUMBER_DUPLICATED = "중복되는 숫자 없이 입력해주세요.";
const USER_INPUT_NUMBER_LENGTH_NOT_EXCEED = "세 자릿수 숫자를 입력해주세요.";

const NO_CORRECT_ANSWER = "낫싱";
const CORRECT_ANSWER =
  "<p><span>🎉</span> <strong>정답을 맞추셨습니다!</strong> <span>🎉</span></p>";
const ASK_RESTART =
  "<p><span>게임을 새로 시작하겠습니까?</span> <button id='game-restart-button'>게임 재시작</button></p>";

export {
  MIN_NUMBER,
  MAX_NUMBER,
  MAX_LENGTH,
  USER_INPUT_INCLUDE_ZERO,
  USER_INPUT_NUMBER_DUPLICATED,
  USER_INPUT_NUMBER_LENGTH_NOT_EXCEED,
  NO_CORRECT_ANSWER,
  CORRECT_ANSWER,
  ASK_RESTART,
};
