import {
  getNumberInRange,
  getRandomArrayElement,
  getRandomNumberInRange,
  getRandomInteger,
  getSequentialNumbers,
} from '../helpers/helpers';

import {
  COMMENTS,
  PHOTOS_COUNT,
  PHOTO_IDS_RANGE,
  URLS_RANGE,
  LIKES_RANGE,
  COMMENTS_COUNT_RANGE,
  COMMENT_AVATARS_RANGE,
} from '../helpers/consts';

import { getData } from '../helpers/fetchData';

const { comments, emails } = await getData(COMMENTS_COUNT_RANGE.MAX);

// Photos data generation
const getPhotoId = getNumberInRange(PHOTO_IDS_RANGE.MIN, PHOTO_IDS_RANGE.MAX);
const getPhotoPath = getNumberInRange(URLS_RANGE.MIN, URLS_RANGE.MAX);
const getLikes = () => getRandomNumberInRange(LIKES_RANGE.MIN, LIKES_RANGE.MAX);
const getDescription = () => getRandomArrayElement(comments);
const getCommentsCount = () =>
  getRandomNumberInRange(COMMENTS_COUNT_RANGE.MIN, COMMENTS_COUNT_RANGE.MAX);

// Comments data generation
const getCommentId = getSequentialNumbers();
const getCommentAvatarPath = () =>
  getRandomInteger(COMMENT_AVATARS_RANGE.MIN, COMMENT_AVATARS_RANGE.MAX);
const getCommentText = () => getRandomArrayElement(COMMENTS);
const getCommentAuthor = () => getRandomArrayElement(emails);

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

const createPhotosData = () =>
  Array.from({ length: PHOTOS_COUNT }, createPhotoData);

export { createPhotosData };
