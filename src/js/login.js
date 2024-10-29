document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login attempt:', { email, password });
    // Here you would typically send the login data to your server
});

function socialLogin(provider) {
    console.log('Social login attempt with:', provider);
    // Here you would typically initiate the OAuth flow for the selected provider
}