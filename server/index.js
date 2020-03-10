const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

mongoose.connect(
  process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('Connected to DB!')
);

// Middlewares
app.use(bodyParser.json());
app.use(cors());

const jobsRoute = require('./routes/jobs');
app.use('/jobs', jobsRoute);

// ROUTES
app.get('/', (req, res) => res.send('Home'));

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
