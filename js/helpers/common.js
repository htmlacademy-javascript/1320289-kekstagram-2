import { ESC_KEYCODE } from './consts';

const createFragment = () => document.createDocumentFragment();

const getElementFromTemplate = (selector) =>
  document
    .querySelector(`#${selector}`)
    .content.querySelector(`.${selector}`)
    .cloneNode(true);

const isEscKeyCode = (evt) => evt.keyCode === ESC_KEYCODE;

const onClickOutside = (evt, close) => {
  if (evt.target === evt.currentTarget) {
    close();
  }
};

const onEscKeydown = (evt, close) => {
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    return;
  }

  if (isEscKeyCode(evt)) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    close();
  }
};

const debounce = (cb, timeout = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeout);
  };
};

export {
  createFragment,
  getElementFromTemplate,
  isEscKeyCode,
  onClickOutside,
  onEscKeydown,
  debounce,
};
