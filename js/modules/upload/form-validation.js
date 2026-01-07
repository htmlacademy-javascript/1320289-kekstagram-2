import { COMMENT_LENGTH, HASHTAGS } from '../../helpers/consts';
import { sendData } from '../api';
import { showToastr } from '../toastr';

const formNode = document.querySelector('.img-upload__form');
const hashtagsNode = document.querySelector('.text__hashtags');
const commentsNode = document.querySelector('.text__description');
const submitNode = document.querySelector('.img-upload__submit');

let pristine = null;

const parseHashtags = (value) => (value ? value.trim().split(/\s+/) : []);

const validations = [
  {
    node: hashtagsNode,
    validate: (value) => {
      const tags = parseHashtags(value);
      return !tags.length || tags.every((tag) => /^#[a-zа-яё0-9]+$/i.test(tag));
    },
    error: 'Хештег должен начинаться с # и состоять только из букв и чисел',
  },
  {
    node: hashtagsNode,
    validate: (value) => {
      const tags = parseHashtags(value);
      return !tags.length || tags.every((tag) => tag.length <= HASHTAGS.LENGTH);
    },
    error: `Хештег не может быть длинее ${HASHTAGS.LENGTH} символов включая #`,
  },
  {
    node: hashtagsNode,
    validate: (value) => parseHashtags(value).length <= HASHTAGS.COUNT,
    error: `Максимум может быть ${HASHTAGS.COUNT} хэштегов`,
  },
  {
    node: hashtagsNode,
    validate: (value) => {
      const tags = parseHashtags(value).map((tag) => tag.toLowerCase());
      return tags.length === new Set(tags).size;
    },
    error: 'Хэштеги не должны повторяться',
  },
  {
    node: hashtagsNode,
    validate: (value) =>
      !value || (!/##/.test(value) && !/[^#\s]#/.test(value)),
    error: 'Хештеги должны разделяться пробелами',
  },
  {
    node: commentsNode,
    validate: (value) => !value || value.length <= COMMENT_LENGTH,
    error: `Длина комментария не должна превышать ${COMMENT_LENGTH}`,
  },
];

const createPristine = () => {
  pristine = new Pristine(
    formNode,
    {
      classTo: 'img-upload__field-wrapper',
      errorTextParent: 'img-upload__field-wrapper',
      errorTextTag: 'div',
      errorTextClass: 'img-upload__field-wrapper--error',
    },
    false,
  );

  validations.forEach(({ node, validate, error }, index) => {
    pristine.addValidator(node, validate, error, index, false);
  });
};

const destroyPristine = () => {
  if (pristine) {
    pristine.destroy();
    pristine = null;
  }
};

const onFieldInput = () => {
  const isValid = pristine.validate();
  submitNode.disabled = !isValid;
};

const onFormSubmit = (evt, onSubmit) => {
  evt.preventDefault();

  if (!pristine || !pristine.validate()) {
    return;
  }

  submitNode.disabled = true;

  sendData(new FormData(evt.target))
    .then(() => {
      showToastr('success');
      onSubmit();
    })
    .catch(() => {
      showToastr('error');
    })
    .finally(() => {
      submitNode.disabled = false;
    });
};

export { onFieldInput, onFormSubmit, createPristine, destroyPristine };
