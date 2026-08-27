const fs = require('fs');
const path = require('path');
const logger = require('./modules/logger');

const filePath = path.join(__dirname, 'test.txt');

function createFile() {
    console.log('Creating File...');
    fs.writeFile(filePath, 'Hello Node.js', (err) => {
        if (err) return logger.error(`Failed to create file: ${err.message}`);
        console.log('File Created');
        readFile(updateFile);
    });
}

function readFile(next) {
    console.log('Reading File');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return logger.error(`Failed to read file: ${err.message}`);
        console.log(data);
        if (typeof next === 'function') next();
    });
}

function updateFile() {
    fs.appendFile(filePath, '\nLearning FS Module', (err) => {
        if (err) return logger.error(`Failed to update file: ${err.message}`);
        console.log('File Updated');
        readFile(deleteFile);
    });
}

function deleteFile() {
    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                logger.error('File does not exist, nothing to delete.');
            } else {
                logger.error(`Failed to delete file: ${err.message}`);
            }
            return;
        }
        console.log('File Deleted');
    });
}

createFile();