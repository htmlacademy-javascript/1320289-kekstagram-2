import { closeModal } from './upload-modal';

const form = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const submit = document.querySelector('.img-upload__submit');

const pristine = new Pristine(
  form,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
    errorTextClass: 'img-upload__field-wrapper--error',
  },
  false,
);

const validateFormat = (value) => {
  if (!value) {
    return true;
  }

  return value
    .trim()
    .split(/\s+/)
    .every((tag) => /^#[a-zа-яё0-9]+$/i.test(tag));
};

const validateTagLength = (value) => {
  if (!value) {
    return true;
  }

  return value
    .trim()
    .split(/\s+/)
    .every((tag) => tag.length <= 20);
};

const validateCount = (value) => {
  if (!value) {
    return true;
  }

  return value.trim().split(/\s+/).length <= 5;
};

const validateUnique = (value) => {
  if (!value) {
    return true;
  }

  const tags = value.trim().toLowerCase().split(/\s+/);
  return tags.length === new Set(tags).size;
};

const validateOffset = (value) => {
  if (!value) {
    return true;
  }
  return !/##/.test(value) && !/[^#\s]#/.test(value);
};

pristine.addValidator(
  hashtags,
  validateFormat,
  'Хештег должен начинаться с # и состоять только из букв и чисел',
);

pristine.addValidator(
  hashtags,
  validateTagLength,
  'Хештег не может быть длинее 20 символов включая #',
);

pristine.addValidator(
  hashtags,
  validateCount,
  'Максимум может быть 5 хэштегов',
  3,
  false,
);

pristine.addValidator(
  hashtags,
  validateUnique,
  'Хэштеги не должны повторяться',
);

pristine.addValidator(
  hashtags,
  validateOffset,
  'Хештеги должны разделяться пробелами',
);

const onFieldInput = () => {
  const isValid = pristine.validate();
  submit.disabled = !isValid;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    form.submit();
    pristine.destroy();
    closeModal();
  }
};

export { onFieldInput, onFormSubmit };
