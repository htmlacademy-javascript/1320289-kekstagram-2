import { isEscKeyCode } from '../../helpers/helpers';

const galleryModal = document.querySelector('.big-picture');
const galleryModalClose = document.querySelector('#picture-cancel');
const body = document.body;

const clickOutsideHandler = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeGalleryModal();
  }
};

const escKeydownHandler = (evt) => {
  if (isEscKeyCode(evt)) {
    evt.preventDefault();
    closeGalleryModal();
  }
};

function closeGalleryModal() {
  document.removeEventListener('keydown', escKeydownHandler);
  galleryModal.removeEventListener('click', clickOutsideHandler);
  galleryModalClose.removeEventListener('click', closeGalleryModal);

  galleryModal.classList.add('hidden');
  body.classList.remove('modal-open');
}

const openGalleryModal = () => {
  document.addEventListener('keydown', escKeydownHandler);
  galleryModal.addEventListener('click', clickOutsideHandler);
  galleryModalClose.addEventListener('click', closeGalleryModal);

  galleryModal.classList.remove('hidden');
  body.classList.add('modal-open');
};

export { openGalleryModal };
