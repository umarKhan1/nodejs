var path = require('path');

var web =("Desktop/name/mhyperson///name.html");
var web2 = ("Desktop\name\mhyperson///name");

console.log(path.normalize(web));
console.log(path.basename(web));
console.log(path.extname(web));
console.log(path.dirname(web));