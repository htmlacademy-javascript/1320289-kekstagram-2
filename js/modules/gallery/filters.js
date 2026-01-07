import { RANDOM_IMAGES_COUNT } from '../../helpers/consts';

const filtersNode = document.querySelector('.img-filters');
const filterFormNode = document.querySelector('.img-filters__form');
const hiddenClass = 'img-filters--inactive';
const activeFilterClass = 'img-filters__button--active';

let currentFilterNode = document.querySelector('#filter-default');

const FILTERS = {
  'filter-default': (photos) => photos,
  'filter-random': (photos) =>
    photos
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, RANDOM_IMAGES_COUNT),
  'filter-discussed': (photos) =>
    photos.slice().sort((a, b) => b.comments.length - a.comments.length),
};

const applyFilter = (filter, photos) => {
  const filterRule = FILTERS[filter];
  return FILTERS[filter] ? filterRule(photos) : photos;
};

const onFilterChange = (evt, pictures, onPicturesUpdate) => {
  if (!evt.target.matches('.img-filters__button')) {
    return;
  }

  const newFilterNode = evt.target;

  if (newFilterNode.id === currentFilterNode.id) {
    return;
  }

  currentFilterNode.classList.toggle(activeFilterClass);
  currentFilterNode = newFilterNode;
  currentFilterNode.classList.toggle(activeFilterClass);
  const filteredPictures = applyFilter(currentFilterNode.id, pictures);
  onPicturesUpdate(filteredPictures);
};

const initFilters = (pictures, onPicturesUpdate) => {
  filtersNode.classList.toggle(hiddenClass);

  filterFormNode.addEventListener('click', (evt) =>
    onFilterChange(evt, pictures, onPicturesUpdate),
  );
};

export { initFilters };
