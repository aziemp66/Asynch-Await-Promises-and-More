const fs = require("fs/promises");

function readFile() {
    // fs.readFile("data.txt", function (error, fileData) {
    //     if (error){
    //     ...
    //     }
    //     console.log("File Parsing Done!");
    //     console.log(fileData.toString());
    // });

    fs.readFile("data.txt")
        .then(function (fileData) {
            console.log("File Parsing Done");
            console.log(fileData.toString());
            //Return anotherAsyncOperations
        })
        .then(function () {})
        .catch(function (error) {
            console.log(error);
        });

    console.log("Hi There!");
}
readFile();
