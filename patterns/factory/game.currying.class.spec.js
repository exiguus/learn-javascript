const {
    CharacterFactory,
    Character,
    Warrior,
    Mage,
    Rogue,
} = require("./game.currying.class");

describe("Game Character Factory with Currying", () => {
    it("should create a warrior character with the correct type and name", () => {
        const characterFactory = new CharacterFactory();
        const createWarrior = characterFactory.createCharacter("warrior");
        const warrior = createWarrior("Aragorn");
        expect(warrior.name).toBe("Aragorn");
        expect(warrior.type).toBe("Warrior");
    });

    it("should create a mage character with the correct type and name", () => {
        const characterFactory = new CharacterFactory();
        const createMage = characterFactory.createCharacter("mage");
        const mage = createMage("Gandalf");
        expect(mage.name).toBe("Gandalf");
        expect(mage.type).toBe("Mage");
    });

    it("should create a rogue character with the correct type and name", () => {
        const characterFactory = new CharacterFactory();
        const createRogue = characterFactory.createCharacter("rogue");
        const rogue = createRogue("Legolas");
        expect(rogue.name).toBe("Legolas");
        expect(rogue.type).toBe("Rogue");
    });
});

describe("Game Character Actions with Chainable Methods", () => {
    it("should perform character actions in the correct order", () => {
        const character = new Warrior("Aragorn");
        const actionsSpy = jest.spyOn(console, "log");
        const expectedActions = [
            "Aragorn uses a powerful melee attack!",
            "Aragorn moves.",
            "Aragorn jumps.",
            "Aragorn moves.",
            "Aragorn, the Warrior, attacks!",
            "Aragorn jumps.",
        ];

        character.specialAbility().move().jump().move().attack().jump();

        expect(actionsSpy).toHaveBeenCalledTimes(expectedActions.length);
        expectedActions.forEach((action, index) => {
            expect(actionsSpy).toHaveBeenNthCalledWith(index + 1, action);
        });
    });
});
