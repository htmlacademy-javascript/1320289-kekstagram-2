const filtersNode = document.querySelector('.img-filters');
const filterFormNode = document.querySelector('.img-filters__form');
const hiddenClass = 'img-filters--inactive';
const activeFilterClass = 'img-filters__button--active';

let currentFilter = 'filter-default';

const FILTERS = {
  'filter-default': (array) => array,
  'filter-random': (array) =>
    array
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 10),
  'filter-discussed': (array) =>
    array.slice().sort((a, b) => b.comments.length - a.comments.length),
};

const toggleFiltersVisibility = () => {
  filtersNode.classList.toggle(hiddenClass);
};

const toggleActiveFilter = (evt) => {
  filterFormNode
    .querySelector(`.${activeFilterClass}`)
    .classList.toggle(activeFilterClass);
  evt.target.classList.toggle(activeFilterClass);
};

const applyFilter = (filter, photos) => {
  const filterRule = FILTERS[filter];
  return FILTERS[filter] ? filterRule(photos) : photos;
};

const onFilterChange = (evt, pictures, onPicturesUpdate) => {
  if (!evt.target.matches('.img-filters__button')) {
    return;
  }

  const newFilter = evt.target.id;

  if (newFilter === currentFilter) {
    return;
  }

  toggleActiveFilter(evt);
  currentFilter = newFilter;
  const filteredPictures = applyFilter(currentFilter, pictures);
  onPicturesUpdate(filteredPictures);
};

const initFilters = (pictures, onPicturesUpdate) => {
  toggleFiltersVisibility();
  filterFormNode.addEventListener('click', (evt) =>
    onFilterChange(evt, pictures, onPicturesUpdate),
  );
};

export { initFilters };
