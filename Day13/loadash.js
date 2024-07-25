import _ from 'lodash';

const numbers = [4, 2, 8, 6];

const max = _.max(numbers);
console.log(`The maximum value is ${max}`);

const sortedNumbers = _.sortBy(numbers);
console.log('Sorted numbers:', sortedNumbers);

const chunkedNumbers = _.chunk(numbers, 2);
console.log('Chunked numbers:', chunkedNumbers);

const min = _.min(numbers);
console.log(`The minimum value is ${min}`)


