const mongoose = require('mongoose');
const schema = mongoose.Schema;

const departmentModel = new schema({
  id: {type: Number},
  name: { type: String }
});

module.exports = mongoose.model('Department', departmentModel);