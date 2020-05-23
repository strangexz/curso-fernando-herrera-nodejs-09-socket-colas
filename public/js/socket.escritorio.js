var socket = io();
var searchParams = new URLSearchParams(window.location.search);
var label = $('small')

console.log(searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('Escritorio necesario');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {
    socket.emit('atenderTicket', { escritorio: escritorio }, function (resp) {
        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket '+resp.numero);
    })
});

// socket.on('connect', () => {
//     console.log('Conectado al servidor');

//     socket.on('estadoActual', (resp) => {
//         console.log('Cargando el último ticket...');
//         label.text(resp.actual);
//     })
// });

// socket.on('disconnect', () => {
//     console.log('Desconectado del servidor');
// });