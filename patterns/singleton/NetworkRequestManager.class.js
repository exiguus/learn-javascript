"use strict";
class NetworkRequestManager {
    constructor() {
        if (!NetworkRequestManager.instance) {
            this.queue = [];
            this.isProcessing = false;
            this.requestLimit = 2; // Maximum concurrent requests allowed
            NetworkRequestManager.instance = this;
        }
        return NetworkRequestManager.instance;
    }

    async makeRequest(url, data) {
        return new Promise(async (resolve, reject) => {
            this.queue.push({url, data, resolve, reject});
            await this.processQueue();
        });
    }

    async processQueue() {
        if (!this.isProcessing) {
            this.isProcessing = true;
            let i = 0;
            while (this.queue.length > 0) {
                if (i < this.requestLimit) {
                    i++;
                    const {url, data, resolve, reject} = this.queue.shift();

                    try {
                        const response = await this.sendRequest(url, data);
                        resolve(response);
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    console.log(
                        `Maximum concurrent requests (${this.requestLimit}) reached.`,
                    );
                    console.log(`Queue length: ${this.queue.length}`);
                    console.log(`Waiting for 2sec.`);
                    // Wait for a short period before processing more requests
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    this.isProcessing = false;
                    await this.processQueue(); // Recursively continue processing
                }
            }
            this.isProcessing = false;
        }
    }

    async sendRequest(url, data) {
        // Simulate an asynchronous network request
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(
                    `Request sent to ${url} with data: ${JSON.stringify(data)}`,
                );
                resolve(`Response from ${url}`);
            }, 1000); // Simulate a 1-second delay
        });
    }
}

// Usage example:
const requestManager = new NetworkRequestManager();

async function sendRequests() {
    const request1 = requestManager.makeRequest(
        "https://api.example.com/endpoint1",
        {param1: "value1"},
    );
    const request2 = requestManager.makeRequest(
        "https://api.example.com/endpoint2",
        {param2: "value2"},
    );
    const request3 = requestManager.makeRequest(
        "https://api.example.com/endpoint3",
        {param3: "value3"},
    );
    const request4 = requestManager.makeRequest(
        "https://api.example.com/endpoint4",
        {param4: "value4"},
    );
    const request5 = requestManager.makeRequest(
        "https://api.example.com/endpoint5",
        {param5: "value5"},
    );

    const responses = await Promise.all([
        request1,
        request2,
        request3,
        request4,
        request5,
    ]);
    console.log(responses);
}

sendRequests();

// Attempting to create another instance won't work:
const anotherRequestManager = new NetworkRequestManager();

console.log(requestManager === anotherRequestManager); // true, they are the same instance

async function sendMoreRequests() {
    const request1 = anotherRequestManager.makeRequest(
        "https://api.example.com/endpoint1",
        {param1: "value1"},
    );
    const request2 = anotherRequestManager.makeRequest(
        "https://api.example.com/endpoint2",
        {param2: "value2"},
    );
    const request3 = anotherRequestManager.makeRequest(
        "https://api.example.com/endpoint3",
        {param3: "value3"},
    );

    const responses = await Promise.all([request1, request2, request3]);
    console.log(responses);
}

sendMoreRequests(); // Will be processed after the first batch of requests

module.exports = NetworkRequestManager;
