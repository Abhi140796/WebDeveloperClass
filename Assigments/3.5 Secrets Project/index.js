//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
'use strict';

import express from "express";
import bodyParser from "body-parser";
// import { fileURLToPath } from 'node:url';
// import { dirname } from 'node:path';
import url from 'node:url'
import path from "node:path";

// let's create app
const app = express();

// let's get directory
// const _dirName = dirname(fileURLToPath(import.meta.url));
const _dirName = path.dirname(url.fileURLToPath(import.meta.url));

// page address
const routes = {
    "homePath": `${_dirName}/public/index.html`,
    "secretsPath": `${_dirName}/public/secret.html`,
    "home": "/",
    "checkSecrets": "/check"
}

let isAuthorized = false;

const authorization = function (req, res, next) {
    if (req.body) {
        const pwd = req.body['password'];
        isAuthorized = pwd === 'ILoveProgramming';
    }

    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(authorization);

const port = 3000;

app.listen(port, function () {
    console.log(`App is running on port: ${port}`);
});

app.get(routes.home, function (req, res) {
    res.sendFile(routes.homePath);
});

app.post(routes.checkSecrets, function (req, res) {
    if (isAuthorized) {
        res.sendFile(routes.secretsPath);
    } else {
        res.sendFile(routes.homePath);
    }
});