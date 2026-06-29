// =========================================
// ASCEND v0.1
// User Onboarding
// =========================================

const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const onboarding = document.getElementById("onboarding");

// Load saved user when the app starts
loadUser();

// Save user when button is clicked
saveUser.addEventListener("click", beginJourney);

function beginJourney() {

    const username = usernameInput.value.trim();

    if (username === "") return;

    localStorage.setItem("username", username);

    loadUser();

}

function loadUser() {

    const username = localStorage.getItem("username");

    if (username) {

        greeting.innerHTML = `Welcome back,<br>${username}.`;

        onboarding.style.display = "none";

    } else {

        greeting.textContent = "Welcome.";

        onboarding.style.display = "block";

    }

}