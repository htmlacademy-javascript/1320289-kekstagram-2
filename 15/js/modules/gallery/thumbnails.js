import { createFragment, getElementFromTemplate } from '../../helpers/common';

const thumbnailsContainerNode = document.querySelector('.pictures');
const thumbnailTemplateNode = getElementFromTemplate('picture');

const createThumbnail = ({ id, comments, description, likes, url }) => {
  const thumbnailNode = thumbnailTemplateNode.cloneNode(true);
  const imgNode = thumbnailNode.querySelector('.picture__img');

  thumbnailNode.dataset.id = id;
  imgNode.src = url;
  imgNode.alt = description;
  thumbnailNode.querySelector('.picture__likes').textContent = likes;
  thumbnailNode.querySelector('.picture__comments').textContent =
    comments.length;

  return thumbnailNode;
};

const renderThumbnails = (thumbnails) => {
  const fragment = createFragment();
  const thumbnailsArray = [];

  thumbnails.forEach((element) => {
    const thumbnailElement = createThumbnail(element);

    fragment.append(thumbnailElement);
    thumbnailsArray.push(thumbnailElement);
  });

  thumbnailsContainerNode.append(fragment);
  return thumbnailsArray;
};

const clearThumbnails = () => {
  thumbnailsContainerNode
    .querySelectorAll('.picture')
    .forEach((picture) => picture.remove());
};

const onThumbnailClick = (clickHandler) => {
  thumbnailsContainerNode.addEventListener('click', (evt) => {
    const thumbnailNode = evt.target.closest('.picture');

    if (thumbnailNode) {
      evt.preventDefault();
      clickHandler(thumbnailNode);
    }
  });
};

export { renderThumbnails, onThumbnailClick, clearThumbnails };
