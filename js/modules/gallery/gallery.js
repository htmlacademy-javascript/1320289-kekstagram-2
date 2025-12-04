import { PICTURES_COUNT } from '../../helpers/consts';
import { createPicturesData } from '../data';
import { renderFullImage } from './full-image';
import { onThumbnailClick, openGalleryModal } from './gallery-modal';
import { renderThumbnails } from './thumbnails';

const imageDataMap = new WeakMap();

const thumbnailClickHandler = (element) => {
  const thumbnail = imageDataMap.get(element);

  if (thumbnail) {
    renderFullImage(thumbnail);
    openGalleryModal();
  }
};

const attachDataToElements = (elements, array) => {
  elements.forEach((element, index) => imageDataMap.set(element, array[index]));
};

const initGallery = () => {
  const picturesData = createPicturesData(PICTURES_COUNT);
  onThumbnailClick(thumbnailClickHandler);

  const thumbnails = renderThumbnails(picturesData);
  attachDataToElements(thumbnails, picturesData);
};

export { initGallery };
