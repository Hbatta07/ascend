// =========================================
// ASCEND v0.8
// Dynamic Mission System
// =========================================

const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const onboarding = document.getElementById("onboarding");

const progressBar = document.querySelector(".progress-fill");
const xpText = document.getElementById("xpText");
const levelTitle = document.getElementById("levelTitle");
const questProgress = document.getElementById("questProgress");
const questList = document.getElementById("questList");

let xp = Number(localStorage.getItem("xp")) || 120;
const maxXP = 1000;

let completedQuests =
JSON.parse(localStorage.getItem("completedQuests")) || [];

loadUser();
renderQuests();
updateXP();
updateQuestProgress();

saveUser.addEventListener("click", beginJourney);

// =========================================
// USER
// =========================================

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

// =========================================
// XP
// =========================================

function updateXP() {

    const level = Math.floor(xp / maxXP) + 1;

    const currentXP = xp % maxXP;

    levelTitle.textContent = `LEVEL ${level}`;

    xpText.textContent = `${currentXP} / ${maxXP} XP`;

    progressBar.style.width =
        (currentXP / maxXP) * 100 + "%";

}

// =========================================
// QUESTS
// =========================================

function updateQuestProgress() {

    questProgress.textContent =
        `${completedQuests.length}/${quests.length}`;

    if (completedQuests.length === quests.length) {

        questProgress.textContent += " ✅";

    }

}

function renderQuests() {

    questList.innerHTML = "";

    quests.forEach((quest, index) => {

        const card = document.createElement("div");

        card.className = "quest";

        card.innerHTML = `
            <div>
                <h3>${quest.title}</h3>
                <p>+${quest.xp} XP</p>
            </div>

            <button class="quest-btn">
                Complete
            </button>
        `;

        const button = card.querySelector(".quest-btn");

        if (completedQuests.includes(index)) {

            completeButton(button);

        }

        button.addEventListener("click", ()