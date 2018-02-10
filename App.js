const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRouter = require('./router/UserRouter');
app.use(bodyParser.json());
app.use(cors());
UserRouter(app);




const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listen on',port);
