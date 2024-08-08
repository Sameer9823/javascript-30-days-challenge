const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);

        
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.send('Welcome to the chat!');
});