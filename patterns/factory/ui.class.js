"use strict";
// Factory for creating UI elements
class UIElementFactory {
    createButton(label) {
        return new Button(label);
    }

    createInputField(placeholder) {
        return new InputField(placeholder);
    }

    createCheckbox(label) {
        return new Checkbox(label);
    }
}

// UI element classes
class Button {
    constructor(label) {
        this.label = label;
    }

    render() {
        // Render button element with the specified label
        console.log(`Button: ${this.label}`);
    }
}

class InputField {
    constructor(placeholder) {
        this.placeholder = placeholder;
    }

    render() {
        // Render input field element with the specified placeholder
        console.log(`Input Field: Placeholder - ${this.placeholder}`);
    }
}

class Checkbox {
    constructor(label) {
        this.label = label;
    }

    render() {
        // Render checkbox element with the specified label
        console.log(`Checkbox: ${this.label}`);
    }
}

// Usage of the UI Element Factory
const uiFactory = new UIElementFactory();

const button1 = uiFactory.createButton("Submit");
const inputField1 = uiFactory.createInputField("Enter your name");
const checkbox1 = uiFactory.createCheckbox(
    "I agree to the terms and conditions",
);

button1.render(); // Output: Button: Submit
inputField1.render(); // Output: Input Field: Placeholder - Enter your name
checkbox1.render(); // Output: Checkbox: I agree to the terms and conditions

module.exports = {
    UIElementFactory,
    Button,
    InputField,
    Checkbox,
};
