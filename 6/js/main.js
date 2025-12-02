import { PICTURES_COUNT } from './helpers/consts';
import { createPicturesData } from './modules/data';
import { renderPictures } from './modules/renderPictures';

const picturesData = createPicturesData(PICTURES_COUNT);

renderPictures(picturesData);
