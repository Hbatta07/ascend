// =========================================
// ASCEND v0.3
// Onboarding + XP + First Quest
// =========================================

const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const onboarding = document.getElementById("onboarding");

const progressBar = document.querySelector(".progress-fill");
const xpText = document.getElementById("xpText");
const completeQuest = document.getElementById("completeQuest");

let xp = Number(localStorage.getItem("xp")) || 120;
const maxXP = 1000;

loadUser();
updateXP();

saveUser.addEventListener("click", beginJourney);

if (completeQuest) {
    completeQuest.addEventListener("click", completeFirstQuest);
}

function beginJourney() {

    const username = usernameInput.value.trim();

    if (username === "") return;

    localStorage.setItem("username", username);

    loadUser();

}

function loadUser() {

    const username = localStorage.getItem("username");

    if (username) {

        greeting.innerHTML = `Welcome back,<