
import express from 'express'

import path from 'path'

import { fileURLToPath } from "node:url";

const port = 5005;

const app = express();

const filename = fileURLToPath(import.meta.url); // reference of root folder

const dirname = path.dirname(filename); // store the address of project folder
// Serve HTML files from public folder
app.use(express.static(path.join(dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "public", "index.html"));
    //projectFolder/public/index.html
});

// About Us page
app.get("/about", (req, res) => {
    res.sendFile(path.join(dirname, "public", "about.html"));
});

// Enquiry page
app.get("/enquiry", (req, res) => {
    res.sendFile(path.join(dirname, "public", "enquiry.html"));
});

app.use((req, res) => {
    res.status(404).send("Not Found");
});

app.listen(port, () => console.log("prg1 is running at", port));