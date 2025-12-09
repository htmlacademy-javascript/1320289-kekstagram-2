import { createFragment } from '../../helpers/helpers';

const commentsContainer = document.querySelector('.social__comments');

const clearComments = (container) => {
  container.replaceChildren();
};

const createComment = (element) => {
  const commentElement = document.querySelector('.social__comment');
  const comment = commentElement.cloneNode(true);

  const img = comment.querySelector('.social__picture');
  const text = comment.querySelector('.social__text');

  img.src = element.avatar;
  img.alt = element.name;
  text.textContent = element.message;

  return comment;
};

// Нужно доработать для показа порциями
const renderComments = (comments) => {
  const fragment = createFragment();

  comments.forEach((comment) => {
    fragment.append(createComment(comment));
  });

  clearComments(commentsContainer);
  commentsContainer.append(fragment);
};

export { renderComments };
