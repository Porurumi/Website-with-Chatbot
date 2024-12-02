function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatWindow = document.getElementById("chatWindow");

    if (userInput.value.trim() !== "") {
        // Display user message
        const userMessage = document.createElement("div");
        userMessage.className = "chat-message user";
        userMessage.textContent = userInput.value;
        chatWindow.appendChild(userMessage);

        // Simulate bot response
        const botMessage = document.createElement("div");
        botMessage.className = "chat-message bot";
        botMessage.textContent = "Hi there! How can I assist you today?";
        chatWindow.appendChild(botMessage);

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Clear input field
        userInput.value = "";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
