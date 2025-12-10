import { COMMENTS_RENDER_COUNT } from '../../helpers/consts';
import { createFragment } from '../../helpers/helpers';

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

const updateLoadMoreVisibility = () => {
  loadMore.classList.toggle('hidden', renderedCount === currentComments.length);
};

const initComments = (comments) => {
  currentComments = comments;
  renderedCount = 0;
  clearComments();
  renderCommentsChunk();
  updateLoadMoreVisibility();
};

const getRenderedCount = () => renderedCount;

export {
  renderCommentsChunk,
  initComments,
  getRenderedCount,
  updateLoadMoreVisibility,
};
