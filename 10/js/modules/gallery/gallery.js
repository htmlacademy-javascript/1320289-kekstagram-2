import { PICTURES_COUNT } from '../../helpers/consts';
import { createPicturesData } from '../data';
import { renderFullImage } from './full-image';
import { openGalleryModal } from './gallery-modal';
import { renderThumbnails, onThumbnailClick } from './thumbnails';

const picturesData = createPicturesData(PICTURES_COUNT);

const thumbnailClickHandler = (element) => {
  const thumbnailId = Number(element.dataset.id);
  const thumbnailData = picturesData.find(
    (picture) => picture.id === thumbnailId,
  );

  if (thumbnailData) {
    renderFullImage(thumbnailData);
    openGalleryModal();
  }
};

const initGallery = () => {
  onThumbnailClick(thumbnailClickHandler);

  renderThumbnails(picturesData);
};

export { initGallery };
