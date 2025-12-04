import { ESC_KEYCODE } from '../../helpers/consts';
import { galleryModal, thumbnailsContainer } from './selectors';

const galleryModalClose = document.querySelector('#picture-cancel');
const body = document.body;

let escHandler = null;
let clickOutsideHandler = null;
let closeClickHandler = null;

const getEscHandler = (func) => (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    func();
  }
};

const getClickOutsideHandler = (func) => (evt) => {
  if (evt.target === evt.currentTarget) {
    func();
  }
};

const addEventListeners = () => {
  if (escHandler) {
    document.addEventListener('keydown', escHandler);
  }

  if (clickOutsideHandler) {
    galleryModal.addEventListener('click', clickOutsideHandler);
  }

  if (closeClickHandler) {
    galleryModalClose.addEventListener('click', closeClickHandler);
  }
};

const removeEventListeners = () => {
  if (escHandler) {
    document.removeEventListener('keydown', escHandler);
    escHandler = null;
  }

  if (clickOutsideHandler) {
    galleryModal.removeEventListener('click', clickOutsideHandler);
    clickOutsideHandler = null;
  }

  if (closeClickHandler) {
    galleryModalClose.removeEventListener('click', closeClickHandler);
    closeClickHandler = null;
  }
};

const closeGalleryModal = () => {
  galleryModal.classList.add('hidden');
  body.classList.remove('modal-open');
  removeEventListeners();
};

const openGalleryModal = () => {
  escHandler = getEscHandler(closeGalleryModal);
  clickOutsideHandler = getClickOutsideHandler(closeGalleryModal);
  closeClickHandler = closeGalleryModal;

  addEventListeners();

  galleryModal.classList.remove('hidden');
  body.classList.add('modal-open');
};

const onThumbnailClick = (clickHandler) => {
  thumbnailsContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (thumbnail) {
      evt.preventDefault();

      if (clickHandler) {
        clickHandler(thumbnail);
      }
    }
  });
};

export { openGalleryModal, onThumbnailClick };
