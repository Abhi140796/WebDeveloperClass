import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const middleware = express();
const filePath = fileURLToPath(import.meta.url);

middleware.use(bodyParser.urlencoded({ extended: true }));

const _dirname = dirname(filePath);

const port = 3000;

middleware.get("/", function (req, res) {
    res.sendFile(_dirname + "/public/index.html");
});

middleware.post("/registration", function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

middleware.listen(port, function () {
    console.log("App running on port: " + port);
});