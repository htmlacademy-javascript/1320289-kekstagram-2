import { TOASTR_SHOW_TIME } from '../helpers/consts';
import { getElementFromTemplate } from '../helpers/common';
import { registerEscHandler, unregisterEscHandler } from './overlay-manager';

function showToastr(id, timeout = false, errorMesssage = null) {
  const toastrNode = getElementFromTemplate(id);

  const overlayConfig = {
    overlay: toastrNode,
    content: toastrNode.firstElementChild,
    onEscKeydown: close,
    onClickOutside: close,
  };

  document.body.append(toastrNode);

  if (errorMesssage) {
    toastrNode.firstElementChild.textContent = errorMesssage;
  }

  if (timeout) {
    setTimeout(() => {
      toastrNode.remove();
    }, TOASTR_SHOW_TIME);
    return;
  }

  const button = toastrNode.querySelector('button');

  button.addEventListener('click', close);
  registerEscHandler(overlayConfig);

  function close() {
    button.removeEventListener('click', close);
    unregisterEscHandler(overlayConfig);
    toastrNode.remove();
  }
}

export { showToastr };
