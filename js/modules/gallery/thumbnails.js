import { createFragment, getElementFromTemplate } from '../../helpers/common';

const thumbnailsContainer = document.querySelector('.pictures');

const createThumbnail = ({ id, comments, description, likes, url }) => {
  const thumbnailTemplate = getElementFromTemplate('picture');
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const img = thumbnail.querySelector('.picture__img');
  const commetntsContainer = thumbnail.querySelector('.picture__comments');
  const likesContainer = thumbnail.querySelector('.picture__likes');

  thumbnail.dataset.id = id;
  img.src = url;
  img.alt = description;
  likesContainer.textContent = likes;
  commetntsContainer.textContent = comments.length;

  return thumbnail;
};

const renderThumbnails = (thumbnails) => {
  const fragment = createFragment();
  const thumbnailsArray = [];

  thumbnails.forEach((thumbnail) => {
    const thumbnailElement = createThumbnail(thumbnail);

    fragment.append(thumbnailElement);
    thumbnailsArray.push(thumbnailElement);
  });

  thumbnailsContainer.append(fragment);
  return thumbnailsArray;
};

const clearThumbnails = () => {
  thumbnailsContainer
    .querySelectorAll('.picture')
    .forEach((picture) => picture.remove());
};

const onThumbnailClick = (clickHandler) => {
  thumbnailsContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (thumbnail) {
      evt.preventDefault();
      clickHandler(thumbnail);
    }
  });
};

export { renderThumbnails, onThumbnailClick, clearThumbnails };
