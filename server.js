var express = require('express');
var app = express();

var msgs = [
  { name: 'Gabby' , msg: 'Go To Bed!' },
  { name: 'Mnkhod' , msg: 'Naah xD' }
];

app.get('/messages', (req, res) => {
  res.send(msgs);
});

app.use(express.static(__dirname));
var server = app.listen(4000, () => console.log('server is listening on port ' , server.address().port));
