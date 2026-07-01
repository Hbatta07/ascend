// =========================================
// ASCEND XP SYSTEM
// =========================================

let xp = Number(localStorage.getItem("xp")) || 120;

const maxXP = 1000;

function getLevel() {

    return Math.floor(xp / maxXP) + 1;

}

function getCurrentXP() {

    return xp % maxXP;

}

function addXP(amount) {

    xp += amount;

    localStorage.setItem("xp", xp);

    updateXPUI();

}

function updateXPUI() {

    const levelTitle =
        document.getElementById("levelTitle");

    const xpText =
        document.getElementById("xpText");

    const progressBar =
        document.querySelector(".progress-fill");

    const currentXP = getCurrentXP();

    levelTitle.textContent =
        `LEVEL ${getLevel()}`;

    xpText.textContent =
        `${currentXP} / ${maxXP} XP`;

    progressBar.style.width =
        (currentXP / maxXP) * 100 + "%";

}

updateXPUI();