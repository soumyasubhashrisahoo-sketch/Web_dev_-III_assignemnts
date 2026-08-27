const fs = require("fs");

console.log("Creating File...");
fs.writeFile("test.txt", "Hello Node.js", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }
    console.log("File Created");

    console.log("Reading File");
    fs.readFile("test.txt", "utf8", (err, data) => {
        console.log(data);

        fs.appendFile("test.txt", "\nLearning FS Module", (err) => {
            console.log("File Updated");

            fs.readFile("test.txt", "utf8", (err, data) => {
                console.log(data);

                fs.unlink("test.txt", (err) => {
                    if (err) {
                        console.log("File not found");
                    } else {
                        console.log("File Deleted");
                    }
                });
            });
        });
    });
});