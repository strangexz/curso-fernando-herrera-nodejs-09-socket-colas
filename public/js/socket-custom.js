var socket = io();

// on: para escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// emmit: para emitir
socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('respuesta server:', resp);
});

// escuchar al server
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});