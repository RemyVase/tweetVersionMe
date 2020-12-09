const http = require('http');
const app = require('./app');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3333;

app.use(cors());
app.set('port', hostname || port );

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});