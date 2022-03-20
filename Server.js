// Client - Server Model
import http from "http";
import url from "url";

let myServer = http.createServer((req, res) => {
    console.log(req.socket.localAddress);
    res.end("HEY");
});

myServer.listen(5000, () => {
    console.log("Server Started");
});