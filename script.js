// =========================================
// ASCEND v0.5
// Dynamic Quest Rewards
// =========================================

const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const onboarding = document.getElementById("onboarding");

const progressBar = document.querySelector(".progress-fill");
const xpText = document.getElementById("xpText");

let xp = Number(localStorage.getItem("xp")) || 120;
const maxXP = 1000;

loadUser();
updateXP();

saveUser.addEventListener("click", beginJourney);

// --------------------
// USER
// --------------------

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

}

// --------------------
// XP
// --------------------

function updateXP(){

    const percentage = (xp / maxXP) * 100;

    progressBar.style.width = percentage + "%";

    xpText.textContent = `${xp} / ${maxXP} XP`;

}

// --------------------
// QUESTS
// --------------------

const questButtons = document.querySelectorAll(".quest-btn");

questButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.disabled) return;

        const reward = Number(button.dataset.xp);

        xp += reward;

        if(xp > maxXP){
            xp = maxXP;
        }

        localStorage.setItem("xp", xp);

        updateXP();

        button.textContent = "Completed ✓";
        button.disabled = true;

    });

});