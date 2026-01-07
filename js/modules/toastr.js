import { TOASTR_SHOW_TIME } from '../helpers/consts';
import {
  getElementFromTemplate,
  onEscKeydown,
  onPointerDown,
} from '../helpers/common';

let isToastrOpen = false;

function showToastr(id, timeout = false, errorMesssage = null) {
  const toastrNode = getElementFromTemplate(id);

  const onToastrEscKeydown = (evt) => {
    onEscKeydown(evt, onToastrClose);
  };

  const onToastrClickOutside = (evt) => {
    onPointerDown(evt, toastrNode, toastrNode.firstElementChild, onToastrClose);
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

  isToastrOpen = true;

  button.addEventListener('click', onToastrClose);
  document.addEventListener('keydown', onToastrEscKeydown);
  document.addEventListener('click', onToastrClickOutside);

  function onToastrClose() {
    document.removeEventListener('keydown', onToastrEscKeydown);
    document.removeEventListener('click', onToastrClickOutside);
    button.removeEventListener('click', onToastrClose);
    toastrNode.remove();
    isToastrOpen = false;
  }
}

const getIsToastrOpen = () => isToastrOpen;

export { showToastr, getIsToastrOpen };
