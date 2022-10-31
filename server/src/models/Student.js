const mongoose = require('mongoose');

const { STUDENT } = require('../constants/roles');

const StudentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: STUDENT,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model('Students', StudentSchema);
