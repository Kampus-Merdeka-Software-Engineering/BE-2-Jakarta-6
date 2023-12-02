import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import packagesRoute from "./routes/packages-route.js"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/packages", packagesRoute);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});