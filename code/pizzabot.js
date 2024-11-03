const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// Alert the menu
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
);

// Loop for pizza ordering
let orderName; // Declare outside the loop

while (true) {
  // Infinite loop
  orderName = prompt(
    `What type of pizza do you want? ${vegetarian}, ${hawaiian}, ${pepperoni}`
  );

  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    let orderQuantity = prompt(`How many of ${orderName} do you want?`);
    let cookingTime;
    if (orderQuantity >= 1 && orderQuantity <= 2) {
      cookingTime = 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
      cookingTime = 15;
    } else if (orderQuantity >= 6) {
      cookingTime = 20;
    }
    function multiplyl(a, b) {
      return a * b;
    }
    const orderTotal = multiplyl(orderQuantity, pizzaPrice);
    alert(
      `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`
    );
    break; // Exit the loop after a valid order
  } else {
    alert("You have not entered the correct type of pizza. Please try again.");
    // The loop will continue, prompting the user again
  }
}
