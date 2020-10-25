
var welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.onclick = function(){
    let firstScreen = document.getElementById('welcomeScreen');
    let otherScreen = document.getElementById('mainScreen');

    firstScreen.className = "hidden";
    otherScreen.className = "";
}

var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
image1.onclick = function(){
    var newURL = "https://www.thredup.com/product/women-white-house-black-market-white-short-sleeve-t-shirt/83702873?query_id=433195387835179008&result_id=433195392008486914";
    chrome.tabs.create({ url: newURL });
}
image2.onclick = function(){
    var newURL = "https://www.depop.com/products/alicekemp17-stunning-90s-vintage-white-padded/";
    chrome.tabs.create({ url: newURL });
}
image3.onclick = function(){
    var newURL = "https://www.thredup.com/product/women-cotton-old-navy-white-short-sleeve-t-shirt/84523392?query_id=433195387835179008&result_id=433195392008486914";
    chrome.tabs.create({ url: newURL });
}

