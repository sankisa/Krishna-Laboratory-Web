

function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    console.log('validateForm function called'); 

    // Regular expression to validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all the required fields.');
        return false;
    }

    
    if (!emailPattern.test(email)) {
        alert('Invalid email address.');
        return false;
    }

    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    
    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return false;
    }

    // Registration is successful
    alert('Registration successful!');
    return true;
}
