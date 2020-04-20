var express = require('express');
var parser = require('body-parser');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

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
  io.emit('message' , req.body);
  res.sendStatus(200);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

var server = http.listen(4000, () => console.log('server is listening on port ' , server.address().port));
