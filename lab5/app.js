
import express from 'express'

const app = express();

app.get("/about", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});

app.get('/about', (req, res) => {
    res.send("WE are FSD Developer");
});

app.get('/login', (req, res) => {
    res.send("msg: user login");
});

app.post('/login', (req, res) => {
    res.send("msg: user login");
});

app.put('/user/update/1', (req, res) => {
    res.send("user update");
});

app.delete('/users/1', (req, res) => {
    res.send("remove user 1");
});

app.use((req, res) => {
    res.status(404).send("Not Found");
});

app.listen(5555, () => console.log("Server is running at 5555"));