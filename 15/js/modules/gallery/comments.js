import { COMMENTS_RENDER_COUNT } from '../../helpers/consts';
import { createFragment } from '../../helpers/common';

const commentsContainerNode = document.querySelector('.social__comments');
const loadMoreNode = document.querySelector('.comments-loader');
const commentTemplateNode = document
  .querySelector('.social__comment')
  .cloneNode(true);

let currentComments = [];
let renderedCount = 0;

const clearComments = () => commentsContainerNode.replaceChildren();

const createComment = ({ avatar, name, message }) => {
  const commentNode = commentTemplateNode.cloneNode(true);
  const imgNode = commentNode.querySelector('.social__picture');

  commentNode.querySelector('.social__text').textContent = message;
  imgNode.src = avatar;
  imgNode.alt = name;

  return commentNode;
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

  commentsContainerNode.append(fragment);
  renderedCount = end;

  loadMoreNode.classList.toggle(
    'hidden',
    renderedCount === currentComments.length,
  );

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
