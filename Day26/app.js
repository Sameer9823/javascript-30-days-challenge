
document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username-input');
    const joinChatBtn = document.getElementById('join-chat-btn');
    const chatSection = document.getElementById('chat-section');
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const usernameDisplay = document.getElementById('username-display');
    const deleteBtn = document.getElementById("delete-btn")
    
    let socket;

    joinChatBtn.addEventListener('click', function () {
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '') {
            alert('Please enter a username');
            return;
        }

        usernameDisplay.textContent = `Username: ${usernameValue}`;
        document.getElementById('auth-section').style.display = 'none';
        chatSection.style.display = 'block';

        socket = new WebSocket('ws://localhost:8000');

        socket.addEventListener('open', function (event) {
            console.log('Connected to WebSocket server');
        });

        socket.addEventListener('message', function (event) {
            const message = JSON.parse(event.data);
            displayMessage(message.username, message.text, 'received');
        });

        sendBtn.addEventListener('click', function () {
            const messageText = messageInput.value.trim();
            if (messageText === '') {
                alert('Please enter a message');
                return;
            }

            const message = {
                username: usernameValue,
                text: messageText
            };

            socket.send(JSON.stringify(message));
            displayMessage(usernameValue, messageText, 'sent');
            messageInput.value = '';
        });
        
       
    });

    deleteBtn.addEventListener('click', function () {
        //delete the user
        socket.send(JSON.stringify({username: usernameInput.value, text: 'delete'}));
        socket.close();
        window.location.href = 'index.html';

    });

   


    

    function displayMessage(username, text, type) {
        const messageElem = document.createElement('div');
        messageElem.style.color = "black";
        messageElem.className = `message ${type}`;
        messageElem.innerHTML = `<strong>${username}:</strong> ${text}`;
        chatWindow.appendChild(messageElem);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }


    

});
