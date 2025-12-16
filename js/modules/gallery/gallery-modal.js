import { createModal } from '../modal-manager';
import { onLoadMoreClick } from './full-image';

const modalNode = document.querySelector('.big-picture');
const closeNode = document.querySelector('#picture-cancel');
const loadMore = document.querySelector('.comments-loader');

const modal = createModal(modalNode, closeNode);
modal.addHandler(loadMore, 'click', onLoadMoreClick);

const openGalleryModal = modal.open;

export { openGalleryModal };
