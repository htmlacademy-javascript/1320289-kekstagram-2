const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createPicture = ({ comments, description, likes, url }) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureComments = picture.querySelector('.picture__comments');
  const pictureLikes = picture.querySelector('.picture__likes');

  pictureImg.src = url;
  pictureImg.alt = description;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;

  return picture;
};

export const renderPictures = (picturesData) => {
  const fragment = document.createDocumentFragment();

  picturesData.forEach((pictureData) =>
    fragment.append(createPicture(pictureData)),
  );

  picturesContainer.append(fragment);
};
