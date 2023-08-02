document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const cartItemsDiv = document.getElementById("cartItems");

  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItemsDiv.innerHTML = "<h2>Items in Cart</h2>";
    cartItems.forEach((item) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      cartItemDiv.appendChild(itemName);

      item.days.forEach((day) => {
        const dayParagraph = document.createElement("p");
        dayParagraph.textContent = `Selected Day: ${day}`;
        cartItemDiv.appendChild(dayParagraph);
      });

      cartItemsDiv.appendChild(cartItemDiv);
    });
  }
});

//  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//       const cartItemsDiv = document.getElementById("cartItems");

//       if (cartItems.length === 0) {
//         cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
//       } else {
//         cartItemsDiv.innerHTML = "<h2>Items in Cart</h2>";
//         cartItems.forEach((item) => {
//           cartItemsDiv.innerHTML += `
//           <div>
//             <p>Product Name: ${item.name}</p>
//             <p>Selected Days: ${item.days.join(", ")}</p>
//             <!-- Add any other relevant item details you want to display -->
//           </div>
//         `;
//         });
//       }
