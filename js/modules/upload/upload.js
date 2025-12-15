import { openModal } from './upload-modal';

const img = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');
const trigger = document.querySelector('.img-upload__input');

const onInputChange = (evt) => {
  const file = evt.target.files[0];

  if (file) {
    const url = URL.createObjectURL(file);
    img.src = url;

    effectsPreviews.forEach((effectPreview) => {
      effectPreview.style.backgroundImage = `url(${url})`;
    });
  }

  openModal();
};

const initUpload = () => {
  trigger.addEventListener('change', onInputChange);
};

export { initUpload };
