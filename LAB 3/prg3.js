import http from "http";

const server = http.createServer((req, res) => {
    if (req.url=="/") {
        res.end("<h1> Home Page</h1>");
    } 
    else if (req.url=="/about") {
        res.end("<h1> About Us page</h1>");    
    } 
    else if(req.url=="/product") {
        res.end(`<h1> Mobile Phone </h1>
                 <h2> Price: 10000 </h2>
                 <p> Discount: 10% </p>
                 <a href="#">Buy Now</a>
            `);

        }
    else {
        res.statusCode = 404;
        res.end(`
            <h1> 404 Page Not Found </h1>
            <p> The page you are looking for does not exist. </p>
            <a href="/"> Home </a>
            `)
        }

})
server.listen(4444, () => console.log("Server is running on port 4444"));  