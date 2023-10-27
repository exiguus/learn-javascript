"use strict";
// Game Character Factory with currying
class CharacterFactory {
    createCharacter(type) {
        return (name) => {
            let character;
            if (type === "warrior") {
                character = new Warrior(name);
            } else if (type === "mage") {
                character = new Mage(name);
            } else if (type === "rogue") {
                character = new Rogue(name);
            }
            return character;
        };
    }
}

// Game Character Classes with chainable methods
class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    attack() {
        console.log(`${this.name}, the ${this.type}, attacks!`);
        return this;
    }

    specialAbility() {
        console.log(`${this.name} uses their special ability.`);
        return this;
    }

    move() {
        console.log(`${this.name} moves.`);
        return this;
    }

    jump() {
        console.log(`${this.name} jumps.`);
        return this;
    }

    swim() {
        console.log(`${this.name} swims.`);
        return this;
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name, "Warrior");
    }

    specialAbility() {
        console.log(`${this.name} uses a powerful melee attack!`);
        return this;
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, "Mage");
    }

    specialAbility() {
        console.log(`${this.name} casts a powerful spell!`);
        return this;
    }
}

class Rogue extends Character {
    constructor(name) {
        super(name, "Rogue");
    }

    specialAbility() {
        console.log(
            `${this.name} sneaks behind the enemy and delivers a critical strike!`,
        );
        return this;
    }
}

// Usage of the Game Character Factory with currying
const characterFactory = new CharacterFactory();

const createWarrior = characterFactory.createCharacter("warrior");
const createMage = characterFactory.createCharacter("mage");
const createRogue = characterFactory.createCharacter("rogue");

const player1 = createWarrior("Aragorn");
const player2 = createMage("Gandalf");
const player3 = createRogue("Legolas");

player1.specialAbility().move().jump().move().attack().jump();
player2.specialAbility().move().move().jump().swim().swim().swim().jump();
player3
    .specialAbility()
    .move()
    .jump()
    .move()
    .attack()
    .move()
    .move()
    .jump()
    .swim();

module.exports = {
    CharacterFactory,
    Character,
    Warrior,
    Mage,
    Rogue,
};
