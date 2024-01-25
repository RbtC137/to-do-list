const ldBar = document.querySelector(".bar");
const body = document.querySelector("body");
let modeFlag = false;

ldBar.addEventListener("click",ldModeChange);


function ldModeChange() {
    if(modeFlag){
        ldBar.setAttribute("class","bar lm-on");
        body.setAttribute("class","");
        modeFlag = false;
    }else {
        ldBar.setAttribute("class","bar dm-on");
        body.setAttribute("class","dark-mode");
        modeFlag = true;
    }
}
