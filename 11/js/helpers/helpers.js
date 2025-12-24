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
  if (
    (document.activeElement && document.activeElement.tagName === 'INPUT') ||
    (document.activeElement && document.activeElement.tagName === 'TEXTAREA')
  ) {
    return;
  }

  if (isEscKeyCode(evt)) {
    evt.preventDefault();
    close();
  }
};

export {
  createFragment,
  getElementFromTemplate,
  isEscKeyCode,
  onClickOutside,
  onEscKeydown,
};
