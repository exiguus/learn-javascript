"use strict";

class ChatMessageBuilder {
    constructor(sender) {
        this.message = {
            sender,
            recipient: "",
            content: "",
            timestamp: new Date(),
        };
    }

    to(recipient) {
        this.message.recipient = recipient;
        return this;
    }

    withContent(content) {
        this.message.content = content;
        return this;
    }

    withTimestamp(timestamp) {
        this.message.timestamp = timestamp;
        return this;
    }

    build() {
        return this.message;
    }
}

// Create chat messages using the ChatMessageBuilder
const messageBuilder = new ChatMessageBuilder("UserA");

const chatMessage1 = messageBuilder
    .to("UserB")
    .withContent("Hi, how are you?")
    .withTimestamp(new Date(2023, 10, 27, 14, 30))
    .build();

const chatMessage2 = messageBuilder
    .to("UserC")
    .withContent("Hello, I'm good!")
    .withTimestamp(new Date(2023, 10, 27, 14, 35))
    .build();

// Simulate a chat application
console.log(chatMessage1);
console.log(chatMessage2);
