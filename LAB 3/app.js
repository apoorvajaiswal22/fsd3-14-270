import http from 'http';

import { getAllTeams } from './teams.js';

const PORT = 5000;

const sendJSON = (res, data) => {

    res.setHeader('Content-Type', 'application/json');

    res.end(
        data === undefined
            ? JSON.stringify({ message: "Not Found" })
            : JSON.stringify(data)
    );
};


const parseJSONBody = (req) => {

    return new Promise((resolve, reject) => {

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {

            try {
                const jsonData = JSON.parse(body);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }

        });

        req.on('error', error => {
            reject(error);
        });

    });
};


const server = http.createServer(async (req, res) => {

    if (req.url === '/teams' && req.method === 'GET') {

        const allTeams = getAllTeams();

        sendJSON(res, allTeams);

    } else {

        res.statusCode = 404;

        sendJSON(res);

    }

});


server.listen(PORT, () => {
    console.log("Server is running at", PORT);
});