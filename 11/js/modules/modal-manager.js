import { onClickOutside, onEscKeydown } from '../helpers/helpers';

let handlerIdCounter = 0;

function createModal(modalNode, closeNode) {
  const body = document.body;
  const handlers = new Map();

  const callbacks = {
    onOpen: null,
    onClose: null,
  };

  const onClickOutsideHandler = (evt) => {
    onClickOutside(evt, close);
  };

  const onEscKeydownHandler = (evt) => {
    onEscKeydown(evt, close);
  };

  function close() {
    document.removeEventListener('keydown', onEscKeydownHandler);
    modalNode.removeEventListener('click', onClickOutsideHandler);
    closeNode.removeEventListener('click', close);

    handlers.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });

    modalNode.classList.add('hidden');
    body.classList.remove('modal-open');

    callbacks.onClose?.();
  }

  function open() {
    document.addEventListener('keydown', onEscKeydownHandler);
    modalNode.addEventListener('click', onClickOutsideHandler);
    closeNode.addEventListener('click', close);

    handlers.forEach(({ element, event, handler }) => {
      element.addEventListener(event, handler);
    });

    modalNode.classList.remove('hidden');
    body.classList.add('modal-open');

    callbacks.onOpen?.();
  }

  const addHandler = (element, event, handler) => {
    if (!element._handlerId) {
      element._handlerId = ++handlerIdCounter;
    }

    const key = `${event}-${element._handlerId}`;

    if (!handlers.has(key)) {
      handlers.set(key, { element, event, handler });
    }
  };

  function setOnOpen(callback) {
    callbacks.onOpen = callback;
  }

  function setOnClose(callback) {
    callbacks.onClose = callback;
  }

  return {
    open,
    close,
    addHandler,
    setOnOpen,
    setOnClose,
  };
}

export { createModal };
