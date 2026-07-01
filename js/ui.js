// =========================================
// ASCEND UI
// =========================================

function renderQuests() {

    const questList = document.getElementById("questList");

    questList.innerHTML = "";

    quests.forEach((quest, index) => {

        const card = document.createElement("div");

        card.className = "quest";

        card.innerHTML = `
            <div class="quest-info">
                <h3>${quest.title}</h3>
                <p>+${quest.xp} XP</p>
            </div>

            <button
                class="quest-btn"
                data-index="${index}">
                Complete
            </button>
        `;

        questList.appendChild(card);

    });

}