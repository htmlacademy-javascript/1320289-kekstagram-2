const checkStringLenght = (string, length) => string.length <= length;

checkStringLenght('Константин Константинопольский', 40); // true

checkStringLenght('Константин Константинопольский', 30); // true

checkStringLenght('Константин Константинопольский', 20); // false

const checkPalidrome = (string) => {
  const preparedString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = preparedString.split('').reverse().join('');
  return preparedString === reversedString;
};

const checkPalindromeCycle = (string) => {
  const lowercaseString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';

  for (let i = lowercaseString.length - 1; i >= 0; i--) {
    if (lowercaseString[i] === ' ') {
      continue;
    }

    reversedString += lowercaseString[i];
  }

  return lowercaseString === reversedString;
};

checkPalidrome('топот'); // true
checkPalindromeCycle('топот'); // true
checkPalidrome('ДовОд'); // true
checkPalindromeCycle('ДовОд'); // true
checkPalidrome('Кекс'); // false
checkPalindromeCycle('Кекс'); // false
checkPalidrome('Лёша на полке клопа нашёл '); // true
checkPalindromeCycle('Лёша на полке клопа нашёл '); // true

const extractNmbersFromString = (string) => {
  const numbers = string.toString().match(/\d+/g);
  const numbersAsString = numbers ? numbers.join('') : NaN;
  return numbersAsString;
};

extractNmbersFromString('2023 год'); // 2023
extractNmbersFromString('ECMAScript 2022'); // 2022
extractNmbersFromString('1 кефир, 0.5 батона'); // 105
extractNmbersFromString('агент 007'); // 007
extractNmbersFromString('а я томат'); // NaN

extractNmbersFromString(2023); // 2023
extractNmbersFromString(-1); // 1
extractNmbersFromString(1.5); // 15

const getTimeInMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;
  return timeInMinutes;
};

export const isMeetingWithinWorkday = (
  workDayStart,
  workDayEnd,
  meetingStart,
  meetingDuration,
) => {
  const workDayStartMinutes = getTimeInMinutes(workDayStart);
  const workDayEndMinutes = getTimeInMinutes(workDayEnd);
  const meetingEndMinutes = getTimeInMinutes(meetingStart) + meetingDuration;
  const meetingStartMinutes = getTimeInMinutes(meetingStart);

  return (
    meetingStartMinutes >= workDayStartMinutes &&
    meetingEndMinutes <= workDayEndMinutes
  );
};

isMeetingWithinWorkday('08:00', '17:30', '14:00', 90); // true
isMeetingWithinWorkday('8:0', '10:0', '8:0', 120); // true
isMeetingWithinWorkday('08:00', '14:30', '14:00', 90); // false
isMeetingWithinWorkday('14:00', '17:30', '08:0', 90); // false
isMeetingWithinWorkday('8:00', '17:30', '08:00', 900); // false
