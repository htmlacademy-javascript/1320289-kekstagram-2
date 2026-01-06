import { resetForm } from '../../helpers/common';
import { createModal } from '../modal';
import {
  applyEffect,
  getCurrentEffect,
  onEffectChange,
  resetCurrentEffect,
} from './effects';
import {
  createPristine,
  destroyPristine,
  onFieldInput,
  onFormSubmit,
} from './form-validation';
import {
  applyScale,
  decreaseScale,
  increaseScale,
  updateButtons,
} from './scale';
import {
  createSlider,
  destroySlider,
  updateSlider,
  updateSliderVisibility,
} from './slider';

const modalNode = document.querySelector('.img-upload__overlay');
const closeNode = document.querySelector('#upload-cancel');
const formNode = document.querySelector('.img-upload__form');
const scaleDecreaseNode = document.querySelector('.scale__control--smaller');
const scaleIncreaseNode = document.querySelector('.scale__control--bigger');
const effectsNode = document.querySelector('.effects__list');
const fieldsNode = document.querySelector('.img-upload__text');

const modal = createModal(modalNode, closeNode);

modal.setOnClose(() => {
  resetForm(formNode);
  destroySlider();
  destroyPristine();
});

modal.setOnOpen(() => {
  updateButtons();
  resetCurrentEffect();
  applyScale();
  createSlider(applyEffect, getCurrentEffect);
  createPristine();
});

modal.addHandler(fieldsNode, 'input', onFieldInput);
modal.addHandler(formNode, 'submit', (evt) => onFormSubmit(evt, modal.close));
modal.addHandler(scaleDecreaseNode, 'click', decreaseScale);
modal.addHandler(scaleIncreaseNode, 'click', increaseScale);
modal.addHandler(effectsNode, 'change', (evt) => {
  onEffectChange(evt, updateSlider, updateSliderVisibility);
});

const openModal = modal.open;
const closeModal = modal.close;

export { openModal, closeModal, resetForm };
