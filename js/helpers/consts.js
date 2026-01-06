const ESC_KEYCODE = 27;

const COMMENTS_RENDER_COUNT = 5;

const HASHTAGS = {
  LENGTH: 20,
  COUNT: 5,
};

const COMMENT_LENGTH = 140;

const SCALE = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const EFFECTS = [
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    units: '',
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    units: '',
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    units: '%',
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    units: 'px',
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    units: '',
  },
  {
    name: 'none',
    filter: 'none',
    min: 1,
    max: 10,
    step: 1,
    units: '',
  },
];

const TOASTR_SHOW_TIME = 5000;

const RANDOM_IMAGES_COUNT = 10;

const DEBOUNCE_TIMEOUT = 500;

export {
  ESC_KEYCODE,
  COMMENTS_RENDER_COUNT,
  HASHTAGS,
  COMMENT_LENGTH,
  SCALE,
  EFFECTS,
  TOASTR_SHOW_TIME,
  RANDOM_IMAGES_COUNT,
  DEBOUNCE_TIMEOUT,
};
