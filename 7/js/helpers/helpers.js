import { ESC_KEYCODE } from './consts';

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getNumberInRange = (min, max) => {
  const prevValues = [];

  return () => {
    let currentValue = min;

    if (prevValues.length >= max - min + 1) {
      return null;
    }

    while (prevValues.includes(currentValue)) {
      currentValue++;
    }

    prevValues.push(currentValue);

    return currentValue;
  };
};

const getSequentialNumbers = () => {
  let currentValue = 0;

  return () => {
    currentValue += 1;
    return currentValue;
  };
};

const getRandomNumberInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomArrayElement = (elements) =>
  elements[Math.floor(Math.random() * elements.length)];

const createFragment = () => document.createDocumentFragment();

const getElementFromTemplate = (selector) =>
  document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);

const isEscKeyCode = (evt) => evt.keyCode === ESC_KEYCODE;

export {
  getRandomInteger,
  getNumberInRange,
  getSequentialNumbers,
  getRandomNumberInRange,
  getRandomArrayElement,
  createFragment,
  getElementFromTemplate,
  isEscKeyCode,
};
