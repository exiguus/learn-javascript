"use strict";
// Factory for creating UI elements with common properties
function createUIElement(type) {
    return function (properties) {
        // Merge common properties with the provided properties
        const elementProps = {type, ...properties};

        return {
            render: function () {
                console.log(
                    `Render ${elementProps.type} with properties:`,
                    elementProps,
                );
            },
        };
    };
}

// Create curried factory functions for specific UI elements
const createButton = createUIElement("Button");
const createInputField = createUIElement("Input Field");
const createCheckbox = createUIElement("Checkbox");

// Usage of the curried UI element factories
const buttonFactory = createButton({label: "Submit"});
const inputFieldFactory = createInputField({placeholder: "Enter your name"});
const checkboxFactory = createCheckbox({
    label: "I agree to the terms and conditions",
});

buttonFactory.render(); // Output: Render Button with properties: { type: 'Button', label: 'Submit' }
inputFieldFactory.render(); // Output: Render Input Field with properties: { type: 'Input Field', placeholder: 'Enter your name' }
checkboxFactory.render(); // Output: Render Checkbox with properties: { type: 'Checkbox', label: 'I agree to the terms and conditions' }

module.exports = {
    createButton,
    createInputField,
    createCheckbox,
};
