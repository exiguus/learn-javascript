const {
    CharacterFactory,
    Character,
    Warrior,
    Mage,
    Rogue,
} = require("./game.class");

describe("Game Character Factory", () => {
    it("should create a warrior character", () => {
        const characterFactory = new CharacterFactory();
        const player = characterFactory.createCharacter("warrior", "Aragorn");
        expect(player.name).toBe("Aragorn");
        expect(player.type).toBe("Warrior");
    });

    it("should create a mage character", () => {
        const characterFactory = new CharacterFactory();
        const player = characterFactory.createCharacter("mage", "Gandalf");
        expect(player.name).toBe("Gandalf");
        expect(player.type).toBe("Mage");
    });

    it("should create a rogue character", () => {
        const characterFactory = new CharacterFactory();
        const player = characterFactory.createCharacter("rogue", "Legolas");
        expect(player.name).toBe("Legolas");
        expect(player.type).toBe("Rogue");
    });
});

describe("Game Character Actions", () => {
    it("should perform character actions", () => {
        const character = new Warrior("Aragorn");
        const actionsSpy = jest.spyOn(console, "log");

        character.attack();
        character.specialAbility();
        character.move();
        character.jump();
        character.swim();

        expect(actionsSpy).toHaveBeenCalledTimes(5);
    });
});
