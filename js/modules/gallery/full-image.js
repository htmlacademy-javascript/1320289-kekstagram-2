import {
  getRenderedCount,
  initComments,
  updateLoadMoreVisibility,
  renderCommentsChunk,
} from './comments';

const galleryModal = document.querySelector('.big-picture');

const updateCommentsCounter = () => {
  const commentsShowCount = galleryModal.querySelector(
    '.social__comment-shown-count',
  );
  commentsShowCount.textContent = getRenderedCount();
};

const onLoadMoreClick = () => {
  renderCommentsChunk();
  updateCommentsCounter();
  updateLoadMoreVisibility();
};

const renderFullImage = (thumbnail) => {
  const img = galleryModal.querySelector('.big-picture__img img');
  const description = galleryModal.querySelector('.social__caption');
  const likes = galleryModal.querySelector('.likes-count');
  const commentsCount = galleryModal.querySelector(
    '.social__comment-total-count',
  );

  img.src = thumbnail.url;
  img.alt = thumbnail.description;
  description.textContent = thumbnail.description;
  likes.textContent = thumbnail.likes;
  commentsCount.textContent = thumbnail.comments.length;

  initComments(thumbnail.comments);
  updateCommentsCounter();
};

export { renderFullImage, onLoadMoreClick };
