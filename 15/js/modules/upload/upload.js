import { showToastr } from '../toastr';
import { openModal, resetForm } from './upload-modal';

const FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
  'image/avif',
];

const imgNode = document.querySelector('.img-upload__preview img');
const effectsNode = document.querySelectorAll('.effects__preview');
const triggerNode = document.querySelector('.img-upload__input');
const formNode = document.querySelector('.img-upload__form');

const onInputChange = (evt) => {
  const file = evt.target.files[0];
  const matches = FILE_TYPES.includes(file.type);

  if (!matches) {
    const allowedTypes = FILE_TYPES.map((type) =>
      type.replace('image/', ' ').toUpperCase(),
    );

    showToastr(
      'data-error',
      true,
      `Не удалось загрузить изображение. \n Разрешенные типы изображений ${allowedTypes}`,
    );

    resetForm(formNode);

    return;
  }

  const url = URL.createObjectURL(file);
  imgNode.src = url;

  effectsNode.forEach((effectPreview) => {
    effectPreview.style.backgroundImage = `url(${url})`;
  });

  openModal();
  triggerNode.blur();
};

const initUpload = () => {
  triggerNode.addEventListener('change', onInputChange);
};

export { initUpload };
