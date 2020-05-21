const app = require('./app');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
