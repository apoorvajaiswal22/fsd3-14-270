import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer(async (req, res) => {
    console.log("method:", req.method);

   if(req.url === '/' && req.method === 'GET'){
    res.end("<h1>Hello client</h1>");
   }

else if(req.url === '/product' && req.method === 'GET')
    {
 res.writeHead(200,{'content-type': 'text/json'}); 

    const stream = createReadStream('./data/product.json', {
      encoding: 'utf-8'
    });

    stream.pipe(res);


}


   else {
    res.statusCode = 404;
    res.end("<h1>not found</h1>");
   }


})



server.listen(3000, () => {console.log("Server is running at 3000...")});