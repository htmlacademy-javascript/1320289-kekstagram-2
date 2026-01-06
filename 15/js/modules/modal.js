import { registerEscHandler, unregisterEscHandler } from './overlay-manager';

let handlerIdCounter = 0;

function createModal(modalNode, closeNode) {
  const body = document.body;
  const handlers = new Map();

  const overlayConfig = {
    overlay: modalNode,
    content: modalNode.firstElementChild,
    onEscKeydown: close,
    onClickOutside: close,
  };

  const callbacks = {
    onOpen: null,
    onClose: null,
  };

  function close() {
    unregisterEscHandler(overlayConfig);
    closeNode.removeEventListener('click', close);

    handlers.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });

    modalNode.classList.add('hidden');
    body.classList.remove('modal-open');

    callbacks.onClose?.();
  }

  function open() {
    registerEscHandler(overlayConfig);
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
