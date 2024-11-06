const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// Function to check if the pizza is on the menu
const checkOrderName = (orderName) => {
  return (
    orderName === "vegetarian" ||
    orderName === "hawaiian" ||
    orderName === "pepperoni"
  );
};

// Function to calculate the total cost
const totalCost = (orderQuantity) => {
  return orderQuantity * pizzaPrice;
};

// Function to calculate the cooking time based on quantity
const cookingTime = (orderQuantity) => {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else if (orderQuantity >= 6) {
    return 20;
  }
};

// Handle the form submission
document
  .getElementById("pizzaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the values from the form
    const orderName = document.getElementById("pizza").value; // pizza type
    const orderQuantity = Number(document.getElementById("quantity").value); // quantity of pizzas

    // Check if the pizza is on the menu
    if (checkOrderName(orderName)) {
      if (isNaN(orderQuantity) || orderQuantity < 1) {
        alert("Please enter a valid quantity greater than 0.");
      } else {
        // Calculate total cost and cooking time
        const sum = totalCost(orderQuantity);
        const time = cookingTime(orderQuantity);

        // Display the result
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
        <p>Great, I'll get started on your ${
          orderName.charAt(0).toUpperCase() + orderName.slice(1)
        } right away.</p>
        <p>It will cost ${sum} kr.</p>
        <p>The pizzas will take ${time} minutes to prepare.</p>
      `;
      }
    } else {
      alert("Sorry, we don't serve that type of pizza.");
    }
  });
