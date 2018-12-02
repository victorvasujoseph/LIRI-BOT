var fs = require("fs");

var FileName = "log.txt";
function logInput(input) {
    fs.appendFile(FileName, input, function (error) {
        if (error) {
            console.log(error);
        }
    });
}

function logPartition(){
    var partition = `************************************************************************************************************\n`

    fs.appendFile(FileName, partition, function (error) {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = {
    logInput,
    logPartition
}