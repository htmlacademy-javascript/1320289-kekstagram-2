import { isEscKeyCode } from '../helpers/helpers';

function createModal(modalNode, closeNode) {
  const body = document.body;
  const handlers = new Map();

  const callbacks = {
    onOpen: null,
    onClose: null,
  };

  const onClickOutside = (evt) => {
    if (evt.target === evt.currentTarget) {
      close();
    }
  };

  const onEscKeydown = (evt) => {
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

  function close() {
    document.removeEventListener('keydown', onEscKeydown);
    modalNode.removeEventListener('click', onClickOutside);
    closeNode.removeEventListener('click', close);

    handlers.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });

    modalNode.classList.add('hidden');
    body.classList.remove('modal-open');

    callbacks.onClose?.();
  }

  function open() {
    document.addEventListener('keydown', onEscKeydown);
    modalNode.addEventListener('click', onClickOutside);
    closeNode.addEventListener('click', close);

    handlers.forEach(({ element, event, handler }) => {
      element.addEventListener(event, handler);
    });

    modalNode.classList.remove('hidden');
    body.classList.add('modal-open');

    callbacks.onOpen?.();
  }

  const addHandler = (element, event, handler) => {
    const key = `${event}-${element}`;
    if (!handlers.has(key)) {
      element.addEventListener(event, handler);
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
