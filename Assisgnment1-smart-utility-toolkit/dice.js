const crypto = require('crypto');
const logger = require('./modules/logger');

function rollDice() {
    return crypto.randomInt(1, 7);
}

function simulateRolls(count) {
    console.log(`Rolling dice ${count} time(s)...\n`);
    for (let i = 1; i <= count; i++) {
        const value = rollDice();
        console.log(`Roll ${i}: Dice Rolled: ${value}`);
        logger.log(`Roll ${i} result: ${value}`);
    }
}

const rolls = Number(process.argv[2]) || 1;
simulateRolls(rolls);