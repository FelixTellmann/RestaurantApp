const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; //true false
const app = next({ dev });
const handle = app.getRequestHandler(); //part of next config
const mongoose = require('mongoose');
const Department = require('./models/Department');
mongoose.connect('mongodb://admin:Open1234!@ds247407.mlab.com:47407/sop-management');


app.prepare().then(() => {
  // express code here
  const server = express();
  server.use(bodyParser.json());
  server.use('/api/department', async (req, res, next) => {
    console.log(req.method);
    if (req.method === 'POST') {
      await Department.findOneAndUpdate(
        {
          name: req.body.data
        },
        {
          name: req.body.data
        },
        {
          upsert: true,
          new: true,
          runValidators: true
        }
      );
      await res.send();
    } else if (req.method === 'GET') {
      const dataful = await Department.find();
      res.send(dataful);
    }
    next();
  });
  
  server.get('*', (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});