import { ESC_KEYCODE } from '../helpers/consts';

const stack = [];

const onKeydown = (evt) => {
  if (evt.keyCode !== ESC_KEYCODE) {
    return;
  }

  if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    return;
  }

  const handler = stack.at(-1);

  if (!handler?.onEscKeydown) {
    return;
  }

  evt.preventDefault();
  handler.onEscKeydown();
};

const onPointerDown = (evt) => {
  const handler = stack.at(-1);

  if (!handler) {
    return;
  }

  if (evt.target !== handler.overlay) {
    return;
  }

  if (handler.content && handler.content.contains(evt.target)) {
    return;
  }

  handler.onClickOutside();
};

document.addEventListener('keydown', onKeydown);
document.addEventListener('mousedown', onPointerDown);

const registerEscHandler = (handler) => {
  stack.push(handler);
};

const unregisterEscHandler = (handler) => {
  const index = stack.lastIndexOf(handler);
  if (index !== -1) {
    stack.splice(index, 1);
  }
};

export { registerEscHandler, unregisterEscHandler };
