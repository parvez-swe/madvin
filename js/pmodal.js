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

  const failedbtn = document.getElementById("failedbtn");
  const successbtn = document.getElementById("successbtn");

  if (isAuthenticatedUser) {
    // User is authenticated, show the logout and cart buttons
    failedbtn.style.display = "none";
    successbtn.style.display = "block";
    // loginWithFacebook.style.display = "none";
    // logoutButton.style.display = "inline-block";
    // cartButton.style.display = "inline-block";
  } else {
    // User is not authenticated, show the login, register, and Facebook login buttons
    failedbtn.style.display = "block";
    successbtn.style.display = "none";
  }
}

// Call the toggleButtons function on page load to set the initial state
document.addEventListener("DOMContentLoaded", toggleButtons);
