var fs = require('fs');

fs.writeFileSync("a.txt","I am write my new file sucessfully");
console.log(fs.readFileSync("a.txt").toString());
