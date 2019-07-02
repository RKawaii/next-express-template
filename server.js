const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const ExpressRoutes = express.Router();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = 3000;

ExpressRoutes.route('/express').get(function(req, res) {
  res.json({ msg: 'express' });
});

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(fileUpload());
    server.use(bodyParser.json());

    server.use('/api', ExpressRoutes);
    server.use('/assets', express.static('assets'));

    //nextJs
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`>server ready on port: ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
