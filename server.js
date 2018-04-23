const server = require('./app');
const config = require('./config/config');
const port = config.server.port;

server.listen(port, () => {
    console.log(`Chefmailer-microservice runing in port: ${config.server.port}`);
});