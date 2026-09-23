const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    if (req.url === "/") {
        res.write("Welcome to Node Server");
        res.end();
    } else if (req.url === "/about") {
        res.write("About Page");
        res.end();
    } else if (req.url === "/contact") {
        res.write("Contact Page");
        res.end();
    } else {
        res.writeHead(404);
        res.write("404 Page Not Found");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on PORT 3000");
});