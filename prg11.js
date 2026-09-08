import http from 'http';

const server = http.createServer((req, res) => {

    // GET /
    if (req.url === '/' && req.method === 'GET') {
        res.end('Home Page');
    }

    // GET /about
    else if (req.url === '/about' && req.method === 'GET') {

        const products = [
            {
                id: 1,
                name: 'Product 1',
                price: 100
            },
            {
                id: 2,
                name: 'Product 2',
                price: 200
            }
        ];

        res.end(JSON.stringify(products));
    }

    // POST /product
    else if (req.url === '/product' && req.method === 'POST') {

        // Retrieve data from client
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });
        console.log(body);
        res.end();
           

        req.on('end', () => {
            try {
                const product = JSON.parse(body);

                // Add data to database
                console.log(product);

                // Send response
                res.writeHead(201, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    message: 'Product created successfully',
                    product: product
                }));

            } catch (error) {
                res.writeHead(400, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    message: 'Invalid JSON data'
                }));
            }
        });
    }

    // PUT /product
    else if (req.url === '/product' && req.method === 'PUT') {
        res.end('Update Product');
    }

    // DELETE /product
    else if (req.url === '/product' && req.method === 'DELETE') {
        res.end('Delete Product');
    }

    // Invalid route
    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

server.listen(4000, () => {
    console.log('prg11 is running on port 4000');
});