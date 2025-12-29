import { debounce } from '../../helpers/common';
import { getData } from '../api';
import { showToastr } from '../toastr';
import { initComments, getRenderedCount } from './comments';
import { initFilters } from './filters';
import { renderFullImage } from './full-image';
import { openGalleryModal } from './gallery-modal';
import {
  renderThumbnails,
  onThumbnailClick,
  clearThumbnails,
} from './thumbnails';

const initGallery = () => {
  getData()
    .then((data) => {
      const thumbnailClickHandler = (element) => {
        const thumbnailId = Number(element.dataset.id);
        const thumbnailData = data.find(
          (picture) => picture.id === thumbnailId,
        );

        if (thumbnailData) {
          renderFullImage(thumbnailData, initComments, getRenderedCount);
          openGalleryModal();
        }
      };

      onThumbnailClick(thumbnailClickHandler);
      renderThumbnails(data);

      initFilters(
        data,
        debounce((filteredPictures) => {
          clearThumbnails();
          renderThumbnails(filteredPictures);
        }),
      );
    })
    .catch(() => showToastr('data-error', true));
};

export { initGallery };
