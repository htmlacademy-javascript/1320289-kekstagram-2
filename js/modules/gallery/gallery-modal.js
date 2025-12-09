import { isEscKeyCode } from '../../helpers/helpers';

const galleryModal = document.querySelector('.big-picture');
const galleryModalClose = document.querySelector('#picture-cancel');
const body = document.body;

const onClickOutside = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeGalleryModal();
  }
};

const onEscKeydown = (evt) => {
  if (isEscKeyCode(evt)) {
    evt.preventDefault();
    closeGalleryModal();
  }
};

function closeGalleryModal() {
  document.removeEventListener('keydown', onEscKeydown);
  galleryModal.removeEventListener('click', onClickOutside);
  galleryModalClose.removeEventListener('click', closeGalleryModal);

  galleryModal.classList.add('hidden');
  body.classList.remove('modal-open');
}

const openGalleryModal = () => {
  document.addEventListener('keydown', onEscKeydown);
  galleryModal.addEventListener('click', onClickOutside);
  galleryModalClose.addEventListener('click', closeGalleryModal);

  galleryModal.classList.remove('hidden');
  body.classList.add('modal-open');
};

export { openGalleryModal };
