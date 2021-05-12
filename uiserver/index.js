
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname, '../dist/movableBox'));
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.use(staticFileMiddleware);

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*' );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
    next();
});


app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '../dist/movableBox/index.html'));
});

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server listening on ${port}... `)
});