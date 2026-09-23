const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

let numbers = [4, 7, 10, 15, 22];

for (let i = 0; i < numbers.length; i++) {
    if (isEven(numbers[i])) {
        console.log(numbers[i], "is Even");
    } else {
        console.log(numbers[i], "is Odd");
    }
    logger.log("Checked " + numbers[i]);
}