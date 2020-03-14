const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
  _companyId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Jobs', JobSchema);
