import { SCALE } from '../../helpers/consts';

const inputNode = document.querySelector('.scale__control--value');
const scaleDecreaseNode = document.querySelector('.scale__control--smaller');
const scaleIncreaseNode = document.querySelector('.scale__control--bigger');
const imgNode = document.querySelector('.img-upload__preview img');

const getCurrentScale = () => Number(inputNode.value.replace('%', ''));

const updateButtons = () => {
  const currentScale = getCurrentScale();

  scaleIncreaseNode.disabled = currentScale >= SCALE.MAX;
  scaleDecreaseNode.disabled = currentScale <= SCALE.MIN;
};

const applyScale = () => {
  const currentScale = getCurrentScale();
  imgNode.style.transform = `scale(${currentScale / 100})`;
};

const increaseScale = () => {
  const currentScale = getCurrentScale();
  if (currentScale < SCALE.MAX) {
    inputNode.value = `${currentScale + SCALE.STEP}%`;
    applyScale();
    updateButtons();
  }
};

const decreaseScale = () => {
  const currentScale = getCurrentScale();
  if (currentScale > SCALE.MIN) {
    inputNode.value = `${currentScale - SCALE.STEP}%`;
    applyScale();
    updateButtons();
  }
};

export { increaseScale, decreaseScale, updateButtons };
