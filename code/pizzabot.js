const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// function to see if the ordername input is correct
const checkOrderName = (orderName) => {
  return (
    orderName === vegetarian.toLowerCase() ||
    orderName === hawaiian.toLowerCase() ||
    orderName === pepperoni.toLowerCase()
  );
};
// Calculates the cost of the order
const totalCost = (orderQuantity) => {
  return orderQuantity * pizzaPrice;
};
// Calculate cookling time
const cookingTime = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else if (orderQuantity >= 6) {
    return 20;
  }
};
// Call the functions
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
);
let orderName = prompt(
  `What type of pizza do you want? ${vegetarian}, ${hawaiian}, ${pepperoni}`
).toLowerCase();

while (true) {
  // Check if the pizza is on the menu
  if (checkOrderName(orderName)) {
    // If the order is valid, ask how many pizzas they want
    let orderQuantity = Number(prompt(`How many of ${orderName} do you want?`));

    // Validate if the quantity is a valid number
    if (isNaN(orderQuantity) || orderQuantity < 1) {
      alert("Please enter a valid quantity greater than 0.");
    } else {
      // Calculate the total cost and cooking time
      const sum = totalCost(orderQuantity);
      const time = cookingTime(orderQuantity);

      // Display the final order message
      alert(
        `Great, I'll get started on your ${orderName} right away, it will cost ${sum} kr. The pizzas will take ${time} minutes.`
      );
      break; // Break out of the loop after a valid order
    }
  } else {
    // If the pizza is not on the menu, ask again for a valid pizza type
    alert("Sorry, we don't serve that type of pizza.");
    orderName = prompt(
      `What type of pizza do you want? ${vegetarian}, ${hawaiian}, ${pepperoni}`
    ).toLowerCase(); // Ask again for a valid pizza type
  }
}
