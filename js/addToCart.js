// Get the "Læg i kurv" button by its ID
const addToCartButton = document.getElementById("addInCart");

// Add a click event listener to the button
addToCartButton.addEventListener("click", function () {
  // Get the value of the selected days (checkboxes) from the form
  const selectedDays = document.querySelectorAll('input[name="day"]:checked');
  const selectedDayValues = Array.from(selectedDays).map((day) => day.value);

  // Get other data you may need to add to the cart (e.g., item ID)
  const itemId = addToCartButton.dataset.id;

  // Get the value of the "valgtNavn" span
  const itemName = document.querySelector(".valgtNavn").textContent;

  // Get the value of the "dagnavn" spans (day names)
  const dayNames = Array.from(document.querySelectorAll(".dagnavn")).map(
    (day) => day.textContent
  );

  // Call a function to add the selected item and days to the cart
  addToCart(itemId, selectedDayValues, itemName, dayNames);

  // Optionally, close the modal after adding to cart
  const modalElement = document.getElementById("177-selectdays");
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  modalInstance.hide();
});

// Function to add the item and selected days to the cart
function addToCart(itemId, selectedDays, itemName, dayNames) {
  // Here, you can implement the logic to add the item and selected days to the cart.
  // This might involve sending the data to a server-side script using AJAX, or
  // updating a client-side shopping cart object, depending on your setup.
  // For this example, let's just log the data to the console.

  console.log("Item ID:", itemId);
  console.log("Selected Days:", selectedDays);
  console.log("Item Name:", itemName);
  console.log("Day Names:", dayNames);
  console.log("Successfully added to cart!");
}
