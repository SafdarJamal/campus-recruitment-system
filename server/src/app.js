const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const authRouter = require('./routes/auth');
const companiesRouter = require('./routes/companies');
const studentsRouter = require('./routes/students');
const jobsRouter = require('./routes/jobs');
const profileRouter = require('./routes/profile');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(process.env.MONGO_DB_URI, options)
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error));

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', authRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/profile', profileRouter);

module.exports = app;
