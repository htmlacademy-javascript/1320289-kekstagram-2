import { createPhotosData } from './modules/data';
import { isMeetingWithinWorkday } from './functions';

// eslint-disable-next-line no-console
console.log(createPhotosData());
// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90));
// eslint-disable-next-line no-console
console.log(isMeetingWithinWorkday('8:00', '17:30', '08:00', 900));
