const saveUser = document.getElementById("saveUser");
const usernameInput = document.getElementById("usernameInput");
const greeting = document.getElementById("greeting");
const onboarding = document.getElementById("onboarding");

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

    }

}