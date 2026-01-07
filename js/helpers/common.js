import { DEBOUNCE_TIMEOUT, ESC_KEYCODE } from './consts';

const createFragment = () => document.createDocumentFragment();

const getElementFromTemplate = (selector) =>
  document
    .querySelector(`#${selector}`)
    .content.querySelector(`.${selector}`)
    .cloneNode(true);

const isEscKeyCode = (evt) => evt.keyCode === ESC_KEYCODE;

const onEscKeydown = (evt, cb) => {
  if (!isEscKeyCode(evt)) {
    return;
  }

  if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    return;
  }

  evt.preventDefault();
  cb();
};

const onPointerDown = (evt, overlay, content, cb) => {
  if (evt.target !== overlay) {
    return;
  }

  if (content && content.contains(evt.target)) {
    return;
  }

  cb();
};

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
  debounce,
  resetForm,
  onEscKeydown,
  onPointerDown,
};
