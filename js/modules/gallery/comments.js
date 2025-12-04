import { createFragment, getElementFromTemplate } from '../../helpers/helpers';

const clearComments = (container) => {
  container.replaceChildren();
};

const createComment = (element) => {
  const commentTemplate = getElementFromTemplate('social__comment');
  const comment = commentTemplate.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  const text = comment.querySelector('.social__text');

  img.src = element.avatar;
  img.alt = element.name;
  text.textContent = element.message;

  return comment;
};

// Нужно доработать для показа порциями
const renderComments = (comments) => {
  const commentsContainer = document.querySelector('.social__comments');

  clearComments(commentsContainer);

  const fragment = createFragment();

  comments.forEach((comment) => {
    fragment.append(createComment(comment));
  });

  commentsContainer.append(fragment);
};

export { renderComments };
