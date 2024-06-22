import express from "express";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";


let result = {
    "isWeekend": false,
    "day": "",
    "date": ""
}

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const _dirName = dirname(fileURLToPath(import.meta.url));

const app = express();

function add() {
    return 1 + 2;
}

const getDay = function (req, res, next) {
    const day = new Date();
    const d = day.getDay();
    result.day = weekday[d];
    result.date = day;
    result.isWeekend = d === 0 || d === 6;

    next();
}

app.use(getDay);

const port = 3000;

app.listen(port, function () {
    console.log("App is running");
});

app.get("/", function (req, res) {
    res.render(_dirName + "/public/view/index.ejs", result);
});