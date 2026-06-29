// =========================================
// ASCEND v0.2
// User + XP
// =========================================

const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const onboarding = document.getElementById("onboarding");
const progressBar = document.querySelector(".progress-fill");

loadUser();

saveUser.addEventListener("click", beginJourney);

function beginJourney(){

    const username = usernameInput.value.trim();

    if(username === "") return;

    localStorage.setItem("username", username);

    loadUser();

}

function loadUser(){

    const username = localStorage.getItem("username");

    if(username){

        greeting.innerHTML = `Welcome back,<br>${username}.`;

        onboarding.style.display = "none";

    }else{

        greeting.textContent = "Welcome.";

        onboarding.style.display = "block";

    }

    updateXP();

}

function updateXP(){

    const xp = 120;

    const maxXP = 1000;

    const percentage = (xp / maxXP) * 100;

    progressBar.style.width = percentage + "%";

}