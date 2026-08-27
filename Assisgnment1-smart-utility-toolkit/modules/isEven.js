function isEven(number) {
    const n = Number(number);
    if (Number.isNaN(n)) {
        throw new Error('isEven() requires a valid number.');
    }
    return n % 2 === 0;
}

module.exports = isEven;