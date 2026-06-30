// =========================================
// ASCEND v0.6
// Quest Progress
// =========================================

const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const onboarding = document.getElementById("onboarding");

const progressBar = document.querySelector(".progress-fill");
const xpText = document.getElementById("xpText");
const levelTitle = document.getElementById("levelTitle");
const questProgress = document.getElementById("questProgress");

let xp = Number(localStorage.getItem("xp")) || 120;
const maxXP = 1000;

let completedQuests =
JSON.parse(localStorage.getItem("completedQuests")) || [];

const questButtons = document.querySelectorAll(".quest-btn");

loadUser();
updateXP();
updateQuestProgress();

saveUser.addEventListener("click", beginJourney);

function beginJourney(){

    const username = usernameInput.value.trim();

    if(username==="") return;

    localStorage.setItem("username",username);

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

function updateXP(){

    const level = Math.floor(xp/1000)+1;

    const currentXP = xp%1000;

    progressBar.style.width = (currentXP/1000)*100 + "%";

    levelTitle.textContent = `LEVEL ${level}`;

    xpText.textContent = `${currentXP} / 1000 XP`;

}

function updateQuestProgress(){

    questProgress.textContent =
    `${completedQuests.length}/${questButtons.length}`;

    if(completedQuests.length===questButtons.length){

        questProgress.textContent += " ✅";

    }

}

questButtons.forEach((button,index)=>{

    if(completedQuests.includes(index)){

        button.innerHTML = "✅ Completed";
        button.disabled = true;
        button.style.background = "#16A34A";
        button.style.boxShadow = "0 0 18px rgba(22,163,74,.35)";

    }

    button.addEventListener("click",()=>{

        if(button.disabled) return;

        const reward = Number(button.dataset.xp);

        xp += reward;

        localStorage.setItem("xp",xp);

        completedQuests.push(index);

        localStorage.setItem(
            "completedQuests",
            JSON.stringify(completedQuests)
        );

        updateXP();
        updateQuestProgress();

        progressBar.animate(
            [
                {transform:"scaleX(.98)"},
                {transform:"scaleX(1)"}
            ],
            {
                duration:300
            }
        );

        button.innerHTML = "✅ Completed";
        button.disabled = true;
        button.style.background = "#16A34A";
        button.style.boxShadow = "0 0 18px rgba(22,163,74,.35)";

    });

});