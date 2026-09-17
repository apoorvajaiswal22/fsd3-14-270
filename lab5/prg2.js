import express from 'express'
import path from 'path'
import {fileURLToPath} from "node:url";


const port = 3333;

const app = express();

const filename = fileURLToPath(import.meta.url); // reference of root folder
const dirname = path.dirname(filename); // store the address of project folder

app.use(express.static(path.join(dirname, "frontend")));

app.use((req, res) => {
    res.sendFile(404).send("Resource not found");
});

app.listen(port, () => console.log("prg2 is running at", port));
