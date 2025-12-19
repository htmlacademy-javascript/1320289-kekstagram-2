import { EFFECTS } from '../../helpers/consts';

const imgNode = document.querySelector('.img-upload__preview img');

let currentEffect = EFFECTS.find((effect) => effect.name === 'none');

const buildFilterValue = (effect, value) => {
  if (effect.name === 'none') {
    return 'none';
  }

  return `${effect.filter}(${value}${effect.units})`;
};

const applyEffect = (value = null) => {
  const intensity = value ?? currentEffect.max;

  imgNode.style.filter = buildFilterValue(currentEffect, intensity);
};

const onEffectChange = (evt, updateSlider, updateSliderVisibility) => {
  if (!evt.target.matches('input[name="effect"]')) {
    return;
  }

  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

  applyEffect();

  updateSlider(currentEffect);
  updateSliderVisibility(currentEffect);
};

const getCurrentEffect = () => currentEffect;

export { applyEffect, onEffectChange, getCurrentEffect };
