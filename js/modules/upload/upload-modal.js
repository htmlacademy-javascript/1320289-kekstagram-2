import { createModal } from '../modal-manager';
import { onFieldInput, onFormSubmit } from './form-validation';

const uploadNode = document.querySelector('.img-upload__input');
const modalNode = document.querySelector('.img-upload__overlay');
const closeNode = document.querySelector('#upload-cancel');

const modal = createModal(modalNode, closeNode);
const tag = document.querySelector('.text__hashtags');
const form = document.querySelector('.img-upload__form');

modal.setOnClose(() => {
  uploadNode.value = '';
});

modal.addHandler(tag, 'input', onFieldInput);
modal.addHandler(form, 'submit', onFormSubmit);

const openModal = modal.open;
const closeModal = modal.close;

export { openModal, closeModal };
