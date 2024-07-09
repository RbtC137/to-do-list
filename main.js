const ldBar = document.querySelector(".bar-js");
const body = document.querySelector("body");
let modeFlag = false;

ldBar.addEventListener("click",ldModeChange);


function ldModeChange() {
    ldBar.classList.toggle("dm-on");
    body.classList.toggle("dark-mode");
    modeFlag = false;
 
}
