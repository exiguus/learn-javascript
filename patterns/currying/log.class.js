class LogMessageBuilder {
    constructor(logLevel) {
        this.logLevel = logLevel;
        this.message = {
            logLevel,
            content: "",
            timestamp: new Date(),
        };
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
        // In a real application, you would send the log message to a logging system or storage.
        console.log(this.message);
    }
}

// Create log messages using the LogMessageBuilder class with currying
const createLogMessage = (logLevel) => new LogMessageBuilder(logLevel);

// Define log level-specific functions
const logInfo = createLogMessage("INFO");
const logError = createLogMessage("ERROR");
const logWarn = createLogMessage("WARN");
const logDebug = createLogMessage("DEBUG");

// Log some messages
logInfo.withContent("Application started.").withTimestamp(new Date()).build();

logError
    .withContent("Critical error occurred.")
    .withTimestamp(new Date())
    .build();

logWarn
    .withContent("Potential issue detected.")
    .withTimestamp(new Date())
    .build();

logDebug
    .withContent("Debugging information.")
    .withTimestamp(new Date())
    .build();
