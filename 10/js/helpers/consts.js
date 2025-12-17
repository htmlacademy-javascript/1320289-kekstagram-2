const PICTURES_COUNT = 25;

const PICTURE_IDS_RANGE = {
  MIN: 1,
  MAX: 25,
};

const URLS_RANGE = {
  MIN: 1,
  MAX: 25,
};

const LIKES_RANGE = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS_COUNT_RANGE = {
  MIN: 0,
  MAX: 30,
};

const COMMENT_AVATARS_RANGE = {
  MIN: 1,
  MAX: 6,
};

const ESC_KEYCODE = 27;

const COMMENTS_RENDER_COUNT = 5;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const HASHTAGS = {
  LENGTH: 20,
  COUNT: 5,
};

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

export {
  PICTURES_COUNT,
  PICTURE_IDS_RANGE,
  URLS_RANGE,
  LIKES_RANGE,
  COMMENTS_COUNT_RANGE,
  COMMENT_AVATARS_RANGE,
  ESC_KEYCODE,
  COMMENTS,
  COMMENTS_RENDER_COUNT,
  HASHTAGS,
  SCALE,
  EFFECTS,
};
