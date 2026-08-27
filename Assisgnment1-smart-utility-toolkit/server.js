const http = require('http');
const logger = require('./modules/logger');

const PORT = 3000;

const routes = {
    '/': 'Welcome to Node Server',
    '/about': 'About Page',
    '/contact': 'Contact Page',
};

const server = http.createServer((req, res) => {
    logger.log(`Incoming request: ${req.method} ${req.url}`);

    const body = routes[req.url];

    if (body) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(body);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(PORT, () => {
    logger.log(`Server running at http://localhost:${PORT}/`);
    console.log('Try these routes:');
    console.log(`  http://localhost:${PORT}/`);
    console.log(`  http://localhost:${PORT}/about`);
    console.log(`  http://localhost:${PORT}/contact`);
    console.log(`  http://localhost:${PORT}/anything-else  (404)`);
});