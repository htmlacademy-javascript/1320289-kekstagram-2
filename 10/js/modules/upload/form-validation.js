import { HASHTAGS } from '../../helpers/consts';
import { closeModal } from './upload-modal';

const formNode = document.querySelector('.img-upload__form');
const hashtagsNode = document.querySelector('.text__hashtags');
const submitNode = document.querySelector('.img-upload__submit');

const pristine = new Pristine(
  formNode,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
    errorTextClass: 'img-upload__field-wrapper--error',
  },
  false,
);

const parseHashtags = (value) => (value ? value.trim().split(/\s+/) : []);

const validations = [
  {
    validation: (value) => {
      const tags = parseHashtags(value);
      return !tags.length || tags.every((tag) => /^#[a-zа-яё0-9]+$/i.test(tag));
    },
    error: 'Хештег должен начинаться с # и состоять только из букв и чисел',
  },
  {
    validation: (value) => {
      const tags = parseHashtags(value);
      return !tags.length || tags.every((tag) => tag.length <= HASHTAGS.LENGTH);
    },
    error: `Хештег не может быть длинее ${HASHTAGS.LENGTH} символов включая #`,
  },
  {
    validation: (value) => parseHashtags(value).length <= HASHTAGS.COUNT,
    error: `Максимум может быть ${HASHTAGS.COUNT} хэштегов`,
  },
  {
    validation: (value) => {
      const tags = parseHashtags(value).map((tag) => tag.toLowerCase());
      return tags.length === new Set(tags).size;
    },
    error: 'Хэштеги не должны повторяться',
  },
  {
    validation: (value) =>
      !value || (!/##/.test(value) && !/[^#\s]#/.test(value)),
    error: 'Хештеги должны разделяться пробелами',
  },
];

validations.forEach(({ validation, error }, index) => {
  pristine.addValidator(hashtagsNode, validation, error, index, false);
});

const onFieldInput = () => {
  const isValid = pristine.validate();
  submitNode.disabled = !isValid;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    formNode.submit();
    pristine.destroy();
    closeModal();
  }
};

export { onFieldInput, onFormSubmit };
