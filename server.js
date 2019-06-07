const express = require('express');
const app = express();

app.use('/', express.static('public'));

const setHeaders = (req, res, next) => {
  res.set('Access-Control-Allow-Origin', req.headers.origin);
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
  res.set('AMP-Access-Control-Allow-Source-Origin', req.headers.origin);
  next();
};

app.get('/api', setHeaders, (req, res) => {
  res.json({
    contentAvailable: true,
    someId: 'some-server-id'
  });
});

app.post('/pingback', setHeaders, (req, res) => {
  res.json({});
});

app.listen(1360, () => {
  console.log('Example app listening on port 1360!');
});
