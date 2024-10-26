const fs = require("fs");

// Write "Hello Node" to welcome.tx
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) throw err;
    console.log("File created and written successfully");

    // Read and log data from hello.txt
    fs.readFile("hello.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
