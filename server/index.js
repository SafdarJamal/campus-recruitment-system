const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const authRoute = require('./routes/auth');
const companiesRoute = require('./routes/companies');
const studentsRoute = require('./routes/students');
const jobsRoute = require('./routes/jobs');
const profileRoute = require('./routes/profile');

mongoose.connect(
  process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('Connected to DB!')
);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/user', authRoute);
app.use('/api/companies', companiesRoute);
app.use('/api/students', studentsRoute);
app.use('/api/jobs', jobsRoute);
app.use('/api/profile', profileRoute);

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
