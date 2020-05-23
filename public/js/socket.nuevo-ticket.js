// import { io } from "../../server/server";


var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');

    socket.on('estadoActual', (resp) => {
        console.log('Cargando el último ticket...');
        label.text(resp.actual);
    })
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});



$('button').on('click', function () {
    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        label.text(siguienteTicket);
    });
});
