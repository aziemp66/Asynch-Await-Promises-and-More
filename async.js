const fs = require("fs/promises");

async function readFile() {
    let fileData;
    // fs.readFile("data.txt", function (error, fileData) {
    //     if (error){
    //     ...
    //     }
    //     console.log("File Parsing Done!");
    //     console.log(fileData.toString());
    // });
    try {
        fileData = await fs.readFile("data.txt");
    } catch (error) {
        console.log(error);
    }

    console.log("File Parsing Done");
    console.log(fileData.toString());
    //Return anotherAsyncOperations
    console.log("Hi There!");
}
readFile();
