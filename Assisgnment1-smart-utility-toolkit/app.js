const isEven = require('./modules/isEven');
const logger = require('./modules/logger');

logger.log('Starting module reusability demo...');

const numbersToCheck = [4, 7, 10, 15, 22];

numbersToCheck.forEach((num) => {
    const result = isEven(num) ? 'Even' : 'Odd';
    console.log(`${num} is ${result}`);
    logger.log(`Checked ${num} -> ${result}`);
});

logger.log('Module reusability demo complete.');