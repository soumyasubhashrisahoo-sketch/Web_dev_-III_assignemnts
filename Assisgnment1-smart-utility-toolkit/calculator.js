const logger = require('./modules/logger');

const args = process.argv.slice(2);
const [operation, num1, num2] = args;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

function calculate(op, a, b) {
    const x = Number(a);
    const y = Number(b);

    if (Number.isNaN(x) || Number.isNaN(y)) {
        throw new Error('Both operands must be valid numbers.');
    }

    switch (op) {
        case 'add':
            return add(x, y);
        case 'sub':
            return subtract(x, y);
        case 'mul':
            return multiply(x, y);
        case 'div':
            return divide(x, y);
        default:
            throw new Error(`Invalid operation: "${op}". Use add, sub, mul, or div.`);
    }
}

function main() {
    if (!operation || num1 === undefined || num2 === undefined) {
        console.log('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
        console.log('Example: node calculator.js add 10 5');
        logger.log('Calculator run with missing arguments.');
        return;
    }

    try {
        const result = calculate(operation, num1, num2);
        console.log(`Result: ${result}`);
        logger.log(`Calculated ${operation}(${num1}, ${num2}) = ${result}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        logger.error(`Error during calculation: ${err.message}`);
    }
}

main();