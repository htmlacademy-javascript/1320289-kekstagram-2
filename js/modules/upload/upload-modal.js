import { createModal } from '../modal-manager';
import { applyEffect, getCurrentEffect, onEffectChange } from './effects';
import { onFieldInput, onFormSubmit } from './form-validation';
import { decreaseScale, increaseScale, updateButtons } from './scale';
import {
  createSlider,
  destroySlider,
  updateSlider,
  updateSliderVisibility,
} from './slider';

const uploadNode = document.querySelector('.img-upload__input');
const modalNode = document.querySelector('.img-upload__overlay');
const closeNode = document.querySelector('#upload-cancel');
const tagNode = document.querySelector('.text__hashtags');
const formNode = document.querySelector('.img-upload__form');
const scaleDecreaseNode = document.querySelector('.scale__control--smaller');
const scaleIncreaseNode = document.querySelector('.scale__control--bigger');
const effectsNode = document.querySelector('.effects__list');

const modal = createModal(modalNode, closeNode);

modal.setOnClose(() => {
  uploadNode.value = '';
  destroySlider();
});

modal.setOnOpen(() => {
  updateButtons();
  createSlider(applyEffect, getCurrentEffect);
});

modal.addHandler(tagNode, 'input', onFieldInput);
modal.addHandler(formNode, 'submit', onFormSubmit);
modal.addHandler(scaleDecreaseNode, 'click', decreaseScale);
modal.addHandler(scaleIncreaseNode, 'click', increaseScale);
modal.addHandler(effectsNode, 'change', (evt) => {
  onEffectChange(evt, updateSlider, updateSliderVisibility);
});

const openModal = modal.open;
const closeModal = modal.close;

export { openModal, closeModal };
