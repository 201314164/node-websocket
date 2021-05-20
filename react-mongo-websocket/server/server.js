const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const io = require('socket.io')(server, {cors: { origin:"*"}})
const URI = "mongodb://giossuser:fsadf3FA23d21wfeWSEF3421dFDS2@34.123.46.26:27017/proyecto2";
let Vacunado = require('./models/vaccinated.model');

server.listen(3001, () => {
    console.log(`Server Running on 3001`);
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('fetch', () => {
        Vacunado.find()
            .then(vacunados => socket.emit('fetch', vacunados))
            .catch(err => console.log(err));
    })
});

mongoose.connect(URI,  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .catch(err => console.log(`Error: ${err}`));
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successful');
});
