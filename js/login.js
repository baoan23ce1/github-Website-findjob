// Function to handle user registration
function register(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert('Registration successful!');
    window.location.href = 'login.html';
}

// Function to handle user login
function login(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert(`Welcome ${user.name}!`);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    } else {
        alert('Invalid email or password');
    }
}

// Function to load user info and update the UI
document.addEventListener('DOMContentLoaded', () => {
    const accountName = document.getElementById('account-name');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        accountName.textContent = `Hello, ${loggedInUser.name}`;
        accountName.style.marginLeft = '10px'; // Add some spacing
        accountName.style.fontWeight = 'bold'; // Make it bold for better visibility
    }
});

// Function to handle user logout
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Redirect to login page
}
