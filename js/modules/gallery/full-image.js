import { renderComments } from './comments';
import { galleryModal } from './selectors';

const hideSocial = () => {
  const comments = document.querySelector('.social__comment-count');
  const upload = document.querySelector('.comments-loader');
  comments.classList.add('hidden');
  upload.classList.add('hidden');
};

const renderFullImage = (thumbnail) => {
  const img = galleryModal.querySelector('.big-picture__img img');
  const description = galleryModal.querySelector('.social__caption');
  const likes = galleryModal.querySelector('.likes-count');
  const commentsCount = galleryModal.querySelector(
    '.social__comment-total-count',
  );
  const commentsShowCount = galleryModal.querySelector(
    '.social__comment-shown-count',
  );
  // Заменить на реальное количество
  const COMMENTS_SHOW_COUNT = thumbnail.comments.length;

  img.src = thumbnail.url;
  img.alt = thumbnail.description;
  description.textContent = thumbnail.description;
  likes.textContent = thumbnail.likes;
  commentsCount.textContent = thumbnail.comments.length;
  commentsShowCount.textContent = COMMENTS_SHOW_COUNT;

  hideSocial();
  renderComments(thumbnail.comments);
};

export { renderFullImage };
