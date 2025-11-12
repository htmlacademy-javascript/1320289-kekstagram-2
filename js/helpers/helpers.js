const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomNumberFromInteger = (min, max) => {
  const prevValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (prevValues.length >= max - min + 1) {
      return null;
    }

    while (prevValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    prevValues.push(currentValue);

    return currentValue;
  };
};

export const getRandomNumber = (min, max) => () =>
  Math.floor(Math.random() * (max - min) + min);

export const getRandomArrayElement = (elements) =>
  elements[Math.floor(Math.random() * elements.length)];
