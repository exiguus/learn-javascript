// Menu item object
const menuItem = (name, price, specialRequests) => {
    return {
        name,
        price,
        specialRequests,
    };
};

// Curry function to place an order
const placeOrder = (items) => {
    const order = Array.isArray(items) ? items : [items]; // Ensure that the order is an array of items

    const addToOrder = (newItems) => {
        return placeOrder([...order, newItems]); // Return a new placeOrder function with the updated order
    };

    const finalizeOrder = () => {
        let total = 0;
        order.forEach((item) => {
            total += item.price;
        });
        console.log("Order Summary:");
        order.forEach((item) => {
            console.log(
                `- ${item.name} (${
                    item.specialRequests || "No special requests"
                }) - $${item.price}`,
            );
        });
        console.log(`Total: $${total}`);
    };

    return {
        addToOrder,
        finalizeOrder,
    };
};

// Menu items
const burger = menuItem("Burger", 8.99, "No onions");
const fries = menuItem("Fries", 2.99);
const ketchup = menuItem("Ketchup", 0.99);
const soda = menuItem("Soda", 1.99, "Extra ice");

// Place and customize orders using currying
const order = placeOrder(burger) // Initial order with a burger
    .addToOrder(fries) // Add fries
    .addToOrder(ketchup) // Add ketchup
    .addToOrder(soda) // Add soda
    .finalizeOrder(); // Finalize and print the order

// Output:
// Order Summary:
// - Burger (No onions) - $8.99
// - Fries - $2.99
// - Ketchup - $0.99
// - Soda (Extra ice) - $1.99
// Total: $14.96
