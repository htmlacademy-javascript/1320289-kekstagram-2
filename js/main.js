import {
  COMMENTS,
  NAMES,
  DESCRIPTIONS,
  PHOTO_COUNT,
  PHOTO_ID_RANGE,
  URL_RANGE,
  LIKES_RANGE,
  COMMENTS_COUNT_RANGE,
  COMMENT_ID_RANGE,
  COMMENT_AVATAR_RANGE,
} from './helpers/consts.js';
import {
  getRandomArrayElement,
  getRandomNumber,
  getRandomNumberFromInteger,
} from './helpers/helpers.js';

// Photos data generation
const getPhotoId = getRandomNumberFromInteger(
  PHOTO_ID_RANGE.min,
  PHOTO_ID_RANGE.max,
);
const getPhotoPath = getRandomNumberFromInteger(URL_RANGE.min, URL_RANGE.max);
const getLikes = getRandomNumber(LIKES_RANGE.min, LIKES_RANGE.max);
const getDescription = () => getRandomArrayElement(DESCRIPTIONS);
const getCommentsCount = getRandomNumber(
  COMMENTS_COUNT_RANGE.min,
  COMMENTS_COUNT_RANGE.max,
);

// Comments data generation
const getCommentId = getRandomNumberFromInteger(
  COMMENT_ID_RANGE.min,
  COMMENT_ID_RANGE.max,
);
const getCommentAvatarPath = getRandomNumberFromInteger(
  COMMENT_AVATAR_RANGE.min,
  COMMENT_AVATAR_RANGE.max,
);
const getCommentText = () => getRandomArrayElement(COMMENTS);
const getCommentAuthor = () => getRandomArrayElement(NAMES);

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getCommentAvatarPath()}.svg`,
  message: getCommentText(),
  name: getCommentAuthor(),
});

const createComments = () =>
  Array.from({ length: getCommentsCount() }, createComment);

const createPhotoData = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoPath()}.jpg`,
  description: getDescription(),
  likes: getLikes(),
  comments: createComments(),
});

const photosData = Array.from({ length: PHOTO_COUNT }, createPhotoData);

// eslint-disable-next-line no-console
console.log(photosData.sort((a, b) => a.id - b.id));
