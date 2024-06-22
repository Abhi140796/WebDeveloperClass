"use strict";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { fileURLToPath } from "node:url"
import { dirname } from "node:path"
import { runInNewContext } from "node:vm";

// get import url
const metaUrl = import.meta.url;

// get file path
const filePath = fileURLToPath(metaUrl);

// get directory
const _dir = dirname(filePath);

/**
 * @description This logger object is for 'morgan'. As of now it only contains
 * formats for logging.
 * @see https://www.npmjs.com/package/morgan
 */
const logger = {
    formats: {
        'combined': 'combined',
        'common': 'common',
        'dev': 'dev',
        'short': 'short',
        'tiny': 'tiny'
    }
}

const routes = {
    'home': '/',
    'registration': '/registration'
}

const port = 3000;
const middleWare = express();

middleWare.listen(port, function () {
    console.log('Application is runing');
});

middleWare.use(morgan(logger.formats.combined));

// get method
middleWare.get(routes.home, function (req, res) {
    res.sendFile(_dir + "/public/index.html");
});