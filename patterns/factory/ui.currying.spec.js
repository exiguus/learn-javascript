const {
    createButton,
    createInputField,
    createCheckbox,
} = require("./ui.currying");

describe("UI Element Factory with Common Properties", () => {
    it("should create a button element with the correct properties", () => {
        const buttonFactory = createButton({label: "Submit"});
        const renderedProperties = jest.spyOn(console, "log");

        buttonFactory.render();

        expect(renderedProperties).toHaveBeenCalledWith(
            "Render Button with properties:",
            {
                type: "Button",
                label: "Submit",
            },
        );
    });

    it("should create an input field element with the correct properties", () => {
        const inputFieldFactory = createInputField({
            placeholder: "Enter your name",
        });
        const renderedProperties = jest.spyOn(console, "log");

        inputFieldFactory.render();

        expect(renderedProperties).toHaveBeenCalledWith(
            "Render Input Field with properties:",
            {
                type: "Input Field",
                placeholder: "Enter your name",
            },
        );
    });

    it("should create a checkbox element with the correct properties", () => {
        const checkboxFactory = createCheckbox({
            label: "I agree to the terms and conditions",
        });
        const renderedProperties = jest.spyOn(console, "log");

        checkboxFactory.render();

        expect(renderedProperties).toHaveBeenCalledWith(
            "Render Checkbox with properties:",
            {
                type: "Checkbox",
                label: "I agree to the terms and conditions",
            },
        );
    });
});
