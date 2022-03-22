import https from "https";
import fs from "fs";

let auth = {
    "key" : fs.readFileSync(`./https/privkey.pem`),
    "cert" : fs.readFileSync(`./https/cert.pem`)
};

let httpsServer = https.createServer(auth, (req, res) => {
    res.end("HENLO");
});

httpsServer.listen(443, () => {
    console.log(`HTTPS Server running on port 443`);
});