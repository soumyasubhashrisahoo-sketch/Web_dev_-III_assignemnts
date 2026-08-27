function timestamp() {
    return new Date().toISOString();
}

function log(message) {
    console.log(`[LOG ${timestamp()}] ${message}`);
}

function error(message) {
    console.error(`[ERROR ${timestamp()}] ${message}`);
}

module.exports = { log, error };