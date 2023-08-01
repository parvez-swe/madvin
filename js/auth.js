// Sample function to check if the user is authenticated (You'll need to implement your own logic here)
function isAuthenticated() {
  // Replace this with your authentication logic.
  // For example, check if the user has a valid authentication token.
  // Return true if authenticated, false otherwise.
  return localStorage.getItem("token") !== null; // Change to false if the user is not authenticated
}

// Function to toggle the visibility of buttons based on the authentication status
function toggleButtons() {
  const isAuthenticatedUser = isAuthenticated();

  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");
  const loginWithFacebook = document.getElementById("loginWithFacebook");
  const logoutButton = document.getElementById("logoutButton");
  const cartButton = document.getElementById("cart");

  if (isAuthenticatedUser) {
    // User is authenticated, show the logout and cart buttons
    loginButton.style.display = "none";
    registerButton.style.display = "none";
    loginWithFacebook.style.display = "none";
    logoutButton.style.display = "inline-block";
    cartButton.style.display = "inline-block";
  } else {
    // User is not authenticated, show the login, register, and Facebook login buttons
    loginButton.style.display = "inline-block";
    registerButton.style.display = "inline-block";
    loginWithFacebook.style.display = "inline-block";
    logoutButton.style.display = "none";
    cartButton.style.display = "none";
  }
}

// Logout
function logout() {
  // Remove the token from local storage (assuming your token is stored as 'authToken')
  localStorage.removeItem("token");

  // Implement any other logout logic you might have, such as clearing the user session, etc.

  // For this example, we will simply reload the page after the logout action.
  alert("Logged out successfully!");
  location.reload();
}

// Call the toggleButtons function on page load to set the initial state
document.addEventListener("DOMContentLoaded", toggleButtons);
