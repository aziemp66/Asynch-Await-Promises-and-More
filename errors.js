const fs = require("fs");

function readFile() {
    try {
        const fileData = fs.readFileSync("data.json");
    } catch {
        console.error("An error occured!");
    }

    console.log("Hi There!");
}

readFile();
