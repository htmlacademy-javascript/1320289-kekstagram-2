import { renderComments } from './comments';

const hideSocial = () => {
  const comments = document.querySelector('.social__comment-count');
  const upload = document.querySelector('.comments-loader');
  comments.classList.add('hidden');
  upload.classList.add('hidden');
};

const renderFullImage = (thumbnail) => {
  const galleryModal = document.querySelector('.big-picture');
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
  const commentsShowCountValue = thumbnail.comments.length;

  img.src = thumbnail.url;
  img.alt = thumbnail.description;
  description.textContent = thumbnail.description;
  likes.textContent = thumbnail.likes;
  commentsCount.textContent = thumbnail.comments.length;
  commentsShowCount.textContent = commentsShowCountValue;

  hideSocial();
  renderComments(thumbnail.comments);
};

export { renderFullImage };
