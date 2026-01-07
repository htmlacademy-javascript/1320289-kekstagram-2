import { onEscKeydown, onPointerDown } from '../helpers/common';
import { getIsToastrOpen } from './toastr';

let handlerIdCounter = 0;

function createModal(modalNode, closeNode) {
  const body = document.body;
  const handlers = new Map();

  const callbacks = {
    onOpen: null,
    onClose: null,
  };

  const onModalEscKeydown = (evt) => {
    if (getIsToastrOpen()) {
      return;
    }

    onEscKeydown(evt, onModalClose);
  };

  const onModalClickOutside = (evt) => {
    if (getIsToastrOpen()) {
      return;
    }

    onPointerDown(evt, modalNode, modalNode.firstElementChild, onModalClose);
  };

  function onModalClose() {
    document.removeEventListener('keydown', onModalEscKeydown);
    document.removeEventListener('click', onModalClickOutside);
    closeNode.removeEventListener('click', onModalClose);

    handlers.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });

    modalNode.classList.add('hidden');
    body.classList.remove('modal-open');

    callbacks.onClose?.();
  }

  function onModalOpen() {
    document.addEventListener('keydown', onModalEscKeydown);
    document.addEventListener('click', onModalClickOutside);
    closeNode.addEventListener('click', onModalClose);

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
    onModalOpen,
    onModalClose,
    addHandler,
    setOnOpen,
    setOnClose,
  };
}

export { createModal };
