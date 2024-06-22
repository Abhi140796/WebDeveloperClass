import express from "express";

const middleware = express();
const port = 3000;

const customLogger = function (req, res, next) {
    console.log(req.method);
    next();
}

middleware.use(customLogger);

middleware.get("/", function (req, res) {
    res.send("<h1>Hello</h1>");
});

middleware.listen(port, function () {
    console.log("App is running.");
});