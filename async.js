const fs = require("fs");

function readFile() {
    let fileData;

    fs.readFile("data.txt", function (error, fileData) {
        console.log("File Parsing Done!");
        console.log(fileData.toString());
    });

    console.log("Hi There!");
}
readFile();
