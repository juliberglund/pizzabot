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
const orderName = prompt(
  `What type of pizza do you want? ${vegetarian}, ${hawaiian}, ${pepperoni}`
).toLowerCase();
if (checkOrderName(orderName)) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);
  const sum = totalCost(orderQuantity);
  const time = cookingTime(orderQuantity);
  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${sum} kr. The pizzas will take ${time} minutes.`
  );
} else {
  alert("error");
}
