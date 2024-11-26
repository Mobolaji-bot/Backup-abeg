const http = require("http");
const fs = require("fs")
const port = 4000;
const data = fs.readFileSync("./input.txt", "utf-8")

console.log("sync", data)

console.log("program ended");
fs.readFile("./input.txt", "utf-8", (err, data) => {
    if (err){
        console.log(err);
    }
    console.log("async, data")
});
console.log("program ended")
// const users =
// http.createServer((req, res) => {
//     res.writeHead(200,{"Content-Type": "text/html"});
//     res.write("<h1 style='color:red'>Hello World!</h1>")
//     res.end();
//     console.log(`request url is ${req.url}`)

// }).listen(port, () =>{
//     console.log(`server is up and running on port http://localhost:${port}`)
// })