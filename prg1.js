import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Welcome to Node JS");
    console.log(req.url);
    console.log("Request Method:", req.method);
    console.log("Request Headers:", req.headers);
    console.log("Request Socket:", req.socket);

    res.end("hello");
});

const PORT = 4444
server.listen(PORT, () => console.log("Server is running ..."));
