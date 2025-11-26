// Main JavaScript file for personal portfolio website

// Function to initialize event listeners and functionalities
function init() {
    // Add event listeners for navigation and other interactive elements
    setupNavigation();
    displayCurrentDateTime();
}

// Function to set up navigation event listeners
function setupNavigation() {
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // Redirect to login page
        });
    }
}

// Function to display the current date and time
function displayCurrentDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        const now = new Date();
        dateTimeElement.innerText = now.toLocaleString(); // Display current date and time
    }
}

// Initialize the website functionalities when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);