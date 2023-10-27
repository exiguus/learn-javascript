"use strict";
// Factory for managing different types of assets, data, and metadata
class VersionControlFactory {
    create(type, name) {
        switch (type) {
            case "asset":
                return new Asset(name, type);
            case "data":
                return new Data(name, type);
            case "metadata":
                return new Metadata(name, type);
            default:
                throw new Error(`Unsupported type: ${type}`);
        }
    }
}

// Base class for all version control objects
class VersionControlObject {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

// Asset class
class Asset extends VersionControlObject {
    fetch() {
        console.log(`Fetching the ${this.type} ${this.name}`);
        return this;
    }

    push() {
        console.log(`Pushing the ${this.type} ${this.name}`);
        return this;
    }
}

// Data class
class Data extends VersionControlObject {
    list() {
        console.log(`Listing the ${this.type} ${this.name}`);
        return this;
    }

    pull() {
        console.log(`Pulling the ${this.type} ${this.name}`);
        return this;
    }
}

// Metadata class
class Metadata extends VersionControlObject {
    fetch() {
        console.log(`Fetching the ${this.type} ${this.name}`);
        return this;
    }

    pull() {
        console.log(`Pulling the ${this.type} ${this.name}`);
        return this;
    }

    list() {
        console.log(`Listing the ${this.type} ${this.name}`);
        return this;
    }
}

// Usage of the VersionControlFactory
const factory = new VersionControlFactory();

const asset = factory.create("asset", "image.png");
const data = factory.create("data", "config.json");
const metadata = factory.create("metadata", "README.md");

asset.fetch();
asset.push();

data.list().pull();

metadata.list().fetch().pull();

module.exports = {
    VersionControlFactory,
    Asset,
    Data,
    Metadata,
};
