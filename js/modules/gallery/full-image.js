const galleryModalNode = document.querySelector('.big-picture');

const updateCommentsCounter = (getRenderedCount) => {
  const commentsShowCountNode = galleryModalNode.querySelector(
    '.social__comment-shown-count',
  );
  commentsShowCountNode.textContent = getRenderedCount();
};

const onLoadMoreClick = (renderCommentsChunk, getRenderedCount) => {
  renderCommentsChunk();
  updateCommentsCounter(getRenderedCount);
};

const renderFullImage = (thumbnail, initComments, getRenderedCount) => {
  const imgNode = galleryModalNode.querySelector('.big-picture__img img');

  galleryModalNode.querySelector('.social__caption').textContent =
    thumbnail.description;
  galleryModalNode.querySelector('.likes-count').textContent = thumbnail.likes;
  galleryModalNode.querySelector('.social__comment-total-count').textContent =
    thumbnail.comments.length;

  imgNode.src = thumbnail.url;
  imgNode.alt = thumbnail.description;

  initComments(thumbnail.comments);
  updateCommentsCounter(getRenderedCount);
};

export { renderFullImage, onLoadMoreClick };
