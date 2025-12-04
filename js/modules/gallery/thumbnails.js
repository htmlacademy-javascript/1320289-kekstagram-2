import { createFragment, getElementFromTemplate } from '../../helpers/helpers';
import { thumbnailsContainer } from './selectors';

const createThumbnail = ({ comments, description, likes, url }) => {
  const thumbnailTemplate = getElementFromTemplate('picture');
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const img = thumbnail.querySelector('.picture__img');
  const commetntsContainer = thumbnail.querySelector('.picture__comments');
  const likesContainer = thumbnail.querySelector('.picture__likes');

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

export { renderThumbnails };
