import { openModal } from './upload-modal';

const imgNode = document.querySelector('.img-upload__preview img');
const effectsNode = document.querySelectorAll('.effects__preview');
const triggerNode = document.querySelector('.img-upload__input');

const onInputChange = (evt) => {
  const file = evt.target.files[0];

  if (file) {
    const url = URL.createObjectURL(file);
    imgNode.src = url;

    effectsNode.forEach((effectPreview) => {
      effectPreview.style.backgroundImage = `url(${url})`;
    });
  }

  openModal();
  triggerNode.blur();
};

const initUpload = () => {
  triggerNode.addEventListener('change', onInputChange);
};

export { initUpload };
