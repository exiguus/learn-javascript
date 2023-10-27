const {Button, InputField, Checkbox, UIElementFactory} = require("./ui.class");

describe("UI Element Factory", () => {
    it("should create a button element with the correct label", () => {
        const uiFactory = new UIElementFactory();
        const button = uiFactory.createButton("Submit");
        expect(button.label).toBe("Submit");
    });

    it("should create an input field element with the correct placeholder", () => {
        const uiFactory = new UIElementFactory();
        const inputField = uiFactory.createInputField("Enter your name");
        expect(inputField.placeholder).toBe("Enter your name");
    });

    it("should create a checkbox element with the correct label", () => {
        const uiFactory = new UIElementFactory();
        const checkbox = uiFactory.createCheckbox(
            "I agree to the terms and conditions",
        );
        expect(checkbox.label).toBe("I agree to the terms and conditions");
    });
});

describe("UI Element Rendering", () => {
    it("should render a button element", () => {
        const button = new Button("Submit");
        const renderSpy = jest.spyOn(console, "log");

        button.render();

        expect(renderSpy).toHaveBeenCalledWith("Button: Submit");
    });

    it("should render an input field element", () => {
        const inputField = new InputField("Enter your name");
        const renderSpy = jest.spyOn(console, "log");

        inputField.render();

        expect(renderSpy).toHaveBeenCalledWith(
            "Input Field: Placeholder - Enter your name",
        );
    });

    it("should render a checkbox element", () => {
        const checkbox = new Checkbox("I agree to the terms and conditions");
        const renderSpy = jest.spyOn(console, "log");

        checkbox.render();

        expect(renderSpy).toHaveBeenCalledWith(
            "Checkbox: I agree to the terms and conditions",
        );
    });
});
