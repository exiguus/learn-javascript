const NetworkRequestManager = require("./NetworkRequestManager.class");

describe("NetworkRequestManager Singleton", () => {
    let requestManagerInstance;

    beforeEach(() => {
        // Clear the instance and queue before each test
        NetworkRequestManager.instance = null;
        requestManagerInstance = new NetworkRequestManager();
        requestManagerInstance.queue = []; // Clear the queue
    });

    it("should create only one instance", () => {
        const anotherInstance = new NetworkRequestManager();
        expect(anotherInstance).toBe(requestManagerInstance);
    });

    it("should process requests with rate limiting", async () => {
        const mockSendRequest = jest.fn();

        // Mock the sendRequest method to simulate network requests
        requestManagerInstance.sendRequest = mockSendRequest;

        // Queue 5 requests
        const requestPromises = [];
        for (let i = 1; i <= 5; i++) {
            requestPromises.push(
                requestManagerInstance.makeRequest(`url${i}`, {
                    data: `data${i}`,
                }),
            );
        }

        // Ensure that only 2 requests are processed concurrently
        await Promise.all(requestPromises);

        // Expect the first 2 requests to be processed immediately and the rest to be delayed
        expect(mockSendRequest).toHaveBeenCalledWith("url1", {data: "data1"});
        expect(mockSendRequest).toHaveBeenCalledWith("url2", {data: "data2"});

        // Wait for the delayed requests to be processed
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Expect the remaining 3 requests to be processed after the delay
        expect(mockSendRequest).toHaveBeenCalledWith("url3", {data: "data3"});
        expect(mockSendRequest).toHaveBeenCalledWith("url4", {data: "data4"});
        expect(mockSendRequest).toHaveBeenCalledWith("url5", {data: "data5"});
        // Expect a total of 5 requests to be processed
        expect(mockSendRequest).toHaveBeenCalledTimes(5);
    }, 20000);

    it("should handle concurrent requests and queue when limit is exceeded", async () => {
        const mockSendRequest = jest.fn();

        // Mock the sendRequest method to simulate network requests
        requestManagerInstance.sendRequest = mockSendRequest;

        // Queue 10 requests
        const requestPromises = [];
        for (let i = 1; i <= 10; i++) {
            requestPromises.push(
                requestManagerInstance.makeRequest(`url${i}`, {
                    data: `data${i}`,
                }),
            );
        }

        // Ensure that only 2 requests are processed concurrently, and the rest are queued
        await Promise.all(requestPromises);

        // Expect the first 2 requests to be processed immediately
        expect(mockSendRequest).toHaveBeenCalledWith("url1", {data: "data1"});
        expect(mockSendRequest).toHaveBeenCalledWith("url2", {data: "data2"});

        // Wait for the delayed requests to be processed
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Expect all queued requests to be processed
        expect(mockSendRequest).toHaveBeenCalledTimes(10);
        expect(requestManagerInstance.queue.length).toBe(0);
    }, 30000);
});
