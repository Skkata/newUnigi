import http from 'http';
import app from './app.js';

const server = http.createServer(app);
server.listen(3001, 'localhost', (err) => {
    if(err) return console.log(err);

    console.log('server work on port 3001');
});