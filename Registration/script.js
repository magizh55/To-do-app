const usersDatabase = [
    { email: "admin@gmail.com", password: "Admin@123" },
    { email: "user@gmail.com", password: "User@123" }
];

let attempts = 3;

const passwordField = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

passwordField.addEventListener("input", () => {
    const value = passwordField.value;
    let strength = 0;

    if (value.length > 5) strength += 30;
    if (/[A-Z]/.test(value)) strength += 30;
    if (/[0-9]/.test(value)) strength += 20;
    if (/[@#$%^&*!]/.test(value)) strength += 20;

    strengthBar.style.width = strength + "%";

    if (strength < 40) strengthBar.style.background = "red";
    else if (strength < 80) strengthBar.style.background = "orange";
    else strengthBar.style.background = "lime";
});

togglePassword.addEventListener("click", () => {
    passwordField.type =
        passwordField.type === "password" ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordField.value.trim();

    const user = usersDatabase.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        message.style.color = "lightgreen";
        message.innerText = "Login Successful... Redirecting";

        document.getElementById("loginBtn").innerText = "Loading...";

        setTimeout(() => {
            localStorage.setItem("user", email);
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        attempts--;
        message.style.color = "red";
        message.innerText = "Invalid login credentials";
        attemptsText.innerText = `Remaining attempts: ${attempts}`;

        if (attempts === 0) {
            document.getElementById("loginBtn").disabled = true;
            message.innerText = "Too many attempts. Access blocked.";
        }
    }
});