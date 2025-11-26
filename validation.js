function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validate username
    if (username.trim() === '') {
        usernameError.textContent = 'Username cannot be empty.';
        return false;
    } else if (username.length < 4) {
        usernameError.textContent = 'Username must be at least 4 characters long.';
        return false;
    }

    // Validate password
    if (password.trim() === '') {
        passwordError.textContent = 'Password cannot be empty.';
        return false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    // If validation passes, redirect to home page
    window.location.href = 'home.html';
    return true;
}