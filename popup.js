
var keywordBtn = document.getElementById("keywordBtn");

keywordBtn.onclick = function(){
    let firstScreen = document.getElementById('welcomeScreen');
    let otherScreen = document.getElementById('mainScreen');

    firstScreen.className = "hidden";
    otherScreen.className = "";
}

var currentBtn = document.getElementById("currentBtn");

currentBtn.onclick = function(){
    let firstScreen = document.getElementById('welcomeScreen');
    let otherScreen = document.getElementById('mainScreen');

    firstScreen.className = "hidden";
    otherScreen.className = "";
}
