import {
  getNumberInRange,
  getRandomArrayElement,
  getRandomNumberInRange,
  getRandomInteger,
  getSequentialNumbers,
} from '../helpers/helpers';

import {
  COMMENTS,
  PICTURE_IDS_RANGE,
  URLS_RANGE,
  LIKES_RANGE,
  COMMENTS_COUNT_RANGE,
  COMMENT_AVATARS_RANGE,
} from '../helpers/consts';

import { getData } from '../helpers/fetchData';

const { comments, emails } = await getData(COMMENTS_COUNT_RANGE.MAX);

// Photos data generation
const getPictureId = getNumberInRange(
  PICTURE_IDS_RANGE.MIN,
  PICTURE_IDS_RANGE.MAX,
);
const getPicturePath = getNumberInRange(URLS_RANGE.MIN, URLS_RANGE.MAX);
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

const createPictureData = () => ({
  id: getPictureId(),
  url: `photos/${getPicturePath()}.jpg`,
  description: getDescription(),
  likes: getLikes(),
  comments: createComments(),
});

const createPicturesData = (count) =>
  Array.from({ length: count }, createPictureData);

export { createPicturesData };
