const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const welcomeName = document.getElementById("welcomeName");

if (loginForm && usernameInput) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();

        if (!username) {
            usernameInput.focus();
            return;
        }

        localStorage.setItem("devpathUser", username);
        window.location.href = "dashboard.html";
    });
}

if (welcomeName) {
    const savedUser = localStorage.getItem("devpathUser");
    welcomeName.textContent = savedUser || "Developer";
}
