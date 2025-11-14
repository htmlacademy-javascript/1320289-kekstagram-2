export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getNumberInRange = (min, max) => {
  const prevValues = [];

  return () => {
    let currentValue = min;

    if (prevValues.length >= max - min + 1) {
      return null;
    }

    while (prevValues.includes(currentValue)) {
      currentValue++;
    }

    prevValues.push(currentValue);

    return currentValue;
  };
};

export const getSequentialNumbers = () => {
  let currentValue = 0;

  return () => {
    currentValue += 1;
    return currentValue;
  };
};

export const getRandomNumberInRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const getRandomArrayElement = (elements) =>
  elements[Math.floor(Math.random() * elements.length)];
