import { TOASTR_SHOW_TIME } from '../helpers/consts';
import {
  getElementFromTemplate,
  onClickOutside,
  onEscKeydown,
} from '../helpers/common';

function showToastr(id, timeout = false) {
  const toastr = getElementFromTemplate(id);
  document.body.append(toastr);

  if (timeout) {
    setTimeout(() => {
      toastr.remove();
    }, TOASTR_SHOW_TIME);
    return;
  }

  const button = toastr.querySelector('button');

  const onClickOutsideHandler = (evt) => {
    onClickOutside(evt, close);
  };

  const onEscKeydownHandler = (evt) => {
    onEscKeydown(evt, close);
  };

  document.addEventListener('keydown', onEscKeydownHandler, true);
  toastr.addEventListener('click', onClickOutsideHandler);
  button.addEventListener('click', close);

  function close() {
    document.removeEventListener('keydown', onEscKeydownHandler, true);
    toastr.removeEventListener('click', onClickOutsideHandler);
    button.removeEventListener('click', close);
    toastr.remove();
  }
}

export { showToastr };
