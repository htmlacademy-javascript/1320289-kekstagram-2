const galleryModal = document.querySelector('.big-picture');

const updateCommentsCounter = (getRenderedCount) => {
  const commentsShowCount = galleryModal.querySelector(
    '.social__comment-shown-count',
  );
  commentsShowCount.textContent = getRenderedCount();
};

const onLoadMoreClick = (renderCommentsChunk, getRenderedCount) => {
  renderCommentsChunk();
  updateCommentsCounter(getRenderedCount);
};

const renderFullImage = (thumbnail, initComments, getRenderedCount) => {
  const img = galleryModal.querySelector('.big-picture__img img');

  galleryModal.querySelector('.social__caption').textContent =
    thumbnail.description;
  galleryModal.querySelector('.likes-count').textContent = thumbnail.likes;
  galleryModal.querySelector('.social__comment-total-count').textContent =
    thumbnail.comments.length;

  img.src = thumbnail.url;
  img.alt = thumbnail.description;

  initComments(thumbnail.comments);
  updateCommentsCounter(getRenderedCount);
};

export { renderFullImage, onLoadMoreClick };
