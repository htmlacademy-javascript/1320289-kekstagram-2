import { COMMENTS_RENDER_COUNT } from '../../helpers/consts';
import { createFragment } from '../../helpers/common';

const commentsContainer = document.querySelector('.social__comments');
const loadMore = document.querySelector('.comments-loader');

const commentTemplate = document
  .querySelector('.social__comment')
  .cloneNode(true);

let currentComments = [];
let renderedCount = 0;

const clearComments = () => {
  commentsContainer.replaceChildren();
};

const createComment = (element) => {
  const comment = commentTemplate.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  comment.querySelector('.social__text').textContent = element.message;

  img.src = element.avatar;
  img.alt = element.name;

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

  loadMore.classList.toggle('hidden', renderedCount === currentComments.length);

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
