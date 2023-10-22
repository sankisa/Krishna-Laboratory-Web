function validateloginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
if (username === 'exampleuser' && password === 'password123') {
        // Successful login
        alert('Login successful!');
        return true;
    } else {
        // Failed login
        alert('Invalid username or password. Please try again.');
        return false;
    }
}

