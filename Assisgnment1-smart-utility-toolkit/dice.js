const crypto = require("crypto");

function rollDice() {
    return crypto.randomInt(1, 7);
}

let rolls = Number(process.argv[2]) || 1;

for (let i = 1; i <= rolls; i++) {
    console.log("Dice Rolled:", rollDice());
}