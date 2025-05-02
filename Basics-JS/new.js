const fs = require('fs')

console.log('Starting Program');

fs.readFile('./hello.txt', 'utf-8', function (err, content) {
    if (err){
        console.log('error reading the file');
    }
else{
        console.log(content);        
    }
})


console.log("bye");
