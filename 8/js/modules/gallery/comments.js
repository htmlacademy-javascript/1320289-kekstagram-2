import { COMMENTS_RENDER_COUNT } from '../../helpers/consts';
import { createElement, createFragment } from '../../helpers/helpers';

const commentsContainer = document.querySelector('.social__comments');

let currentComments = [];
let renderedCount = 0;

const clearComments = () => {
  commentsContainer.replaceChildren();
};

const createCommentTemplate = () => {
  const imgSize = 35;

  const element = createElement('li', 'social__comment');
  const img = createElement('img', 'social__picture');
  img.width = imgSize;
  img.height = imgSize;

  const text = createElement('p', 'social__text');
  element.append(img, text);

  return element;
};

const commentTemplate = createCommentTemplate();

const createComment = (element) => {
  const comment = commentTemplate.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  const text = comment.querySelector('.social__text');

  img.src = element.avatar;
  img.alt = element.name;
  text.textContent = element.message;

  return comment;
};

const renderCommentsChunk = () => {
  const fragment = createFragment();

  const end = Math.min(
    renderedCount + COMMENTS_RENDER_COUNT,
    currentComments.length,
  );

  for (let i = renderedCount; i < end; i++) {
    fragment.append(createComment(currentComments[i]));
  }

  commentsContainer.append(fragment);
  renderedCount = end;
  return renderedCount;
};

const initComments = (comments) => {
  currentComments = comments;
  renderedCount = 0;
  clearComments();
  renderCommentsChunk();
};

const getRenderedCount = () => renderedCount;

export { renderCommentsChunk, initComments, getRenderedCount };
