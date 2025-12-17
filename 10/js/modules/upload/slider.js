import { applyEffect, getCurrentEffect } from './effects';

const containerNode = document.querySelector('.img-upload__effect-level');
const inputNode = document.querySelector('.effect-level__value');
const sliderNode = document.querySelector('.effect-level__slider');

const updateSliderVisibility = (effect) => {
  if (effect.name === 'none') {
    containerNode.classList.add('hidden');
    sliderNode.setAttribute('disabled', true);
  } else {
    containerNode.classList.remove('hidden');
    sliderNode.removeAttribute('disabled');
  }
};

const onSliderUpdate = () => {
  applyEffect(sliderNode.noUiSlider.get());
  inputNode.step = getCurrentEffect().name;
  inputNode.value = sliderNode.noUiSlider.get();
};

const createSlider = () => {
  noUiSlider.create(sliderNode, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => parseFloat(value),
    },
  });

  updateSliderVisibility(getCurrentEffect());

  sliderNode.noUiSlider.on('update', () => {
    onSliderUpdate();
  });
};

const destroySlider = () => {
  sliderNode.noUiSlider.destroy();
};

const updateSlider = (effect) => {
  sliderNode.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.max,
    step: effect.step,
  });
};

export { createSlider, destroySlider, updateSlider, updateSliderVisibility };
