import { createModal } from '../modal';
import { getRenderedCount, renderCommentsChunk } from './comments';
import { onLoadMoreClick } from './full-image';

const modalNode = document.querySelector('.big-picture');
const closeNode = document.querySelector('#picture-cancel');
const loadMoreNode = document.querySelector('.comments-loader');

const modal = createModal(modalNode, closeNode);
modal.addHandler(loadMoreNode, 'click', () =>
  onLoadMoreClick(renderCommentsChunk, getRenderedCount),
);

const openGalleryModal = modal.onModalOpen;

export { openGalleryModal };
