import {
  MAX_LENGTH,
  USER_INPUT_INCLUDE_ZERO,
  USER_INPUT_NUMBER_DUPLICATED,
  USER_INPUT_NUMBER_LENGTH_NOT_EXCEED,
} from "./constants.js";

const isNotExceedCondition = (userInput) => {
  return userInput.length !== MAX_LENGTH;
};

const isZeroInclude = (userInput) => {
  return userInput.includes(0);
};

const isDuplicatedUserInput = (userInput) => {
  return [...new Set(userInput)].length !== MAX_LENGTH;
};

export default function isCheckValidUserInput(userInput) {
  if (isNotExceedCondition(userInput)) {
    alert(USER_INPUT_NUMBER_LENGTH_NOT_EXCEED);
    return false;
  }
  if (isDuplicatedUserInput(userInput)) {
    alert(USER_INPUT_NUMBER_DUPLICATED);
    return false;
  }
  if (isZeroInclude(userInput)) {
    alert(USER_INPUT_INCLUDE_ZERO);
    return false;
  }
  return true;
}
