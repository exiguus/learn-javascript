const {Asset, Data, Metadata, VersionControlFactory} = require("./vcs.class");

describe("Version Control Factory", () => {
    it("should create an asset with the correct type and name", () => {
        const factory = new VersionControlFactory();
        const asset = factory.create("asset", "image.png");
        expect(asset.name).toBe("image.png");
        expect(asset.type).toBe("asset");
    });

    it("should create data with the correct type and name", () => {
        const factory = new VersionControlFactory();
        const data = factory.create("data", "config.json");
        expect(data.name).toBe("config.json");
        expect(data.type).toBe("data");
    });

    it("should create metadata with the correct type and name", () => {
        const factory = new VersionControlFactory();
        const metadata = factory.create("metadata", "README.md");
        expect(metadata.name).toBe("README.md");
        expect(metadata.type).toBe("metadata");
    });
});

describe("Version Control Actions", () => {
    it("should perform asset actions", () => {
        const asset = new Asset("image.png", "asset");
        const actionsSpy = jest.spyOn(console, "log");
        asset.fetch();
        asset.push();
        expect(actionsSpy).toHaveBeenCalledWith("Fetching the asset image.png");
        expect(actionsSpy).toHaveBeenCalledWith("Pushing the asset image.png");
    });

    it("should perform data actions", () => {
        const data = new Data("config.json", "data");
        const actionsSpy = jest.spyOn(console, "log");
        data.list();
        data.pull();
        expect(actionsSpy).toHaveBeenCalledWith("Listing the data config.json");
        expect(actionsSpy).toHaveBeenCalledWith("Pulling the data config.json");
    });

    it("should perform metadata actions", () => {
        const metadata = new Metadata("README.md", "metadata");
        const actionsSpy = jest.spyOn(console, "log");
        metadata.list();
        metadata.fetch();
        metadata.pull();
        expect(actionsSpy).toHaveBeenCalledWith(
            "Listing the metadata README.md",
        );
        expect(actionsSpy).toHaveBeenCalledWith(
            "Fetching the metadata README.md",
        );
        expect(actionsSpy).toHaveBeenCalledWith(
            "Pulling the metadata README.md",
        );
    });
});
