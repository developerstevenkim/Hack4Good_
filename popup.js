var welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.onclick = function () {
    let firstScreen = document.getElementById('welcomeScreen');
    let otherScreen = document.getElementById('mainScreen');

    chrome.tabs.executeScript({
        code: 'document.querySelector("body").innerText;'
    }, function (result) {
        //이 문서에서 body  태그 아래에 있는 모든 텍스를 가져온다. 그 결과를 bodyText라는 변수에 담는다.
        var bodyText = result[0];
        //bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다. 그 결과를 myNum이라는 변수에 담는다.
        var myNum = bodyText.match(new RegExp('\\b(the|is|was|of)\\b', 'gi'));
        document.querySelector('#result').innerText = myNum;
        //document.getElementById('item4').innerHTML = result;
    })
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