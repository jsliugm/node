var fs = require("fs")
fs.readFile('input.txt', function (error, data) {
    if (error) return console.error(error);
    console.log(data.toString());
});
console.log("程序执行结束！");