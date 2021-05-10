const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: { origin:"*"}})

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home')
});

server.listen(3001, () => {
    console.log(`Server Running on 3001`);
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('message', (data) => {
        console.log(`Received: ${data}`);
        socket.broadcast.emit('message', data);
    });
});