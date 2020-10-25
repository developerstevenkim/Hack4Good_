
var welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.onclick = function(){
    let firstScreen = document.getElementById('welcomeScreen');
    let otherScreen = document.getElementById('mainScreen');

    firstScreen.className = "hidden";
    otherScreen.className = "";
}

/*
welcomeBtn.addEventListener("click", changePage);
function changePage() {
    console.log("button pressed");
    chrome.browserAction.setPopup({popup: 'popup_2.html'});
  }
  */
