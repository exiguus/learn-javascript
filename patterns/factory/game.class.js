"use strict";
// Game Character Factory
class CharacterFactory {
    createCharacter(type, name) {
        let character;

        if (type === "warrior") {
            character = new Warrior(name);
        } else if (type === "mage") {
            character = new Mage(name);
        } else if (type === "rogue") {
            character = new Rogue(name);
        }
        return character;
    }
}

// Game Character Classes
class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    attack() {
        console.log(`${this.name}, the ${this.type}, attacks!`);
    }

    specialAbility() {
        console.log(`${this.name} uses their special ability.`);
    }

    move() {
        console.log(`${this.name} moves.`);
    }

    jump() {
        console.log(`${this.name} jumps.`);
    }

    swim() {
        console.log(`${this.name} swims.`);
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name, "Warrior");
    }

    specialAbility() {
        console.log(`${this.name} uses a powerful melee attack!`);
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, "Mage");
    }

    specialAbility() {
        console.log(`${this.name} casts a powerful spell!`);
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
    }
}

// Usage of the Game Character Factory
const characterFactory = new CharacterFactory();

const player1 = characterFactory.createCharacter("warrior", "Aragorn");
const player2 = characterFactory.createCharacter("mage", "Gandalf");
const player3 = characterFactory.createCharacter("rogue", "Legolas");

player1.attack();
player1.specialAbility();
player1.move();
player1.jump();
player1.swim();

player2.attack();
player2.specialAbility();
player2.move();
player2.jump();
player2.swim();

try {
    player3.specialAbility().move().attack().jump().swim();
} catch (error) {
    console.log(error);
}

module.exports = {
    CharacterFactory,
    Warrior,
    Mage,
    Rogue,
};
