const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/api/auth');
const companiesRouter = require('./routes/api/companies');
const studentsRouter = require('./routes/api/students');
const jobsRouter = require('./routes/api/jobs');
const profileRouter = require('./routes/api/profile');

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error));

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', authRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/profile', profileRouter);

app.use((req, res) => res.status(404).send('404 - Not Found'));

module.exports = app;
