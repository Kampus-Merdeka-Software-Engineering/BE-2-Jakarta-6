require('dotenv').config()
console.log(process.env)

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import packagesRoute from "./routes/packages-route.js";

import Packages from "./models/packages-model.js";

import { startSequelize } from './utils/startSequelize.js';

const app = express();
const port = 3000;

startSequelize();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.use("/packages", packagesRoute);
app.get("/test", (request, response) => {
    response.json({name: "group6"})
})

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    console.log(err);

    res.status(500).json({
        massage: "Internal Server Error",
    });
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});