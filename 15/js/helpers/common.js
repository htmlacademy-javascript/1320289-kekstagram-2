import { DEBOUNCE_TIMEOUT, ESC_KEYCODE } from './consts';

const createFragment = () => document.createDocumentFragment();

const getElementFromTemplate = (selector) =>
  document
    .querySelector(`#${selector}`)
    .content.querySelector(`.${selector}`)
    .cloneNode(true);

const isEscKeyCode = (evt) => evt.keyCode === ESC_KEYCODE;

const debounce = (cb, timeout = DEBOUNCE_TIMEOUT) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeout);
  };
};

const resetForm = (formNode) => formNode.reset();

export {
  createFragment,
  getElementFromTemplate,
  isEscKeyCode,
  debounce,
  resetForm,
};
