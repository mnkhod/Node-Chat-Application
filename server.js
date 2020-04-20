var express = require('express');
var parser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));


var msgs = [
  { name: 'Gabby' , msg: 'Go To Bed!' },
  { name: 'Mnkhod' , msg: 'Naah xD' }
];

app.get('/messages', (req, res) => {
  res.send(msgs);
});

app.post('/messages', (req, res) => {
  msgs.push(req.body);
  res.sendStatus(200);
});

var server = app.listen(4000, () => console.log('server is listening on port ' , server.address().port));
