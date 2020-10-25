var searchByKeywordBtn = document.getElementById("keywordBtn");
var searchByLinkBtn = document.getElementById("linkBtn");


searchByLinkBtn.onclick = function () {
    ShowMainWhite();
}

searchByKeywordBtn.onclick = function () {
    ShowMainBlack();
}

function ShowMainWhite() {
    let firstScreen = document.getElementById('welcomeScreen');
    let searchByKeyword = document.getElementById('searchByKeyword');
    let searchByLink = document.getElementById('searchByLink');

    firstScreen.className = "hidden";
    searchByKeyword.className = "hidden";
    searchByLink.className = "";
}

function ShowMainBlack() {
    let firstScreen = document.getElementById('welcomeScreen');
    let searchByKeyword = document.getElementById('searchByKeyword');
    let searchByLink = document.getElementById('searchByLink');

    firstScreen.className = "hidden";
    searchByKeyword.className = "";
    searchByLink.className = "hidden";
}


var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var image4 = document.getElementById("img4");
var image5 = document.getElementById("img5");
var image6 = document.getElementById("img6");

function SearchWhite() {
    image1.onclick = function () {
        var newURL = "https://www.thredup.com/product/women-white-house-black-market-white-short-sleeve-t-shirt/83702873?query_id=433195387835179008&result_id=433195392008486914";
        chrome.tabs.create({
            url: newURL
        });
    }
    image2.onclick = function () {
        var newURL = "https://www.depop.com/products/alicekemp17-stunning-90s-vintage-white-padded/";
        chrome.tabs.create({
            url: newURL
        });
    }
    image3.onclick = function () {
        var newURL = "https://www.thredup.com/product/women-cotton-old-navy-white-short-sleeve-t-shirt/84523392?query_id=433195387835179008&result_id=433195392008486914";
        chrome.tabs.create({
            url: newURL
        });
    }
}

function SearchBlack() {
    image4.onclick = function () {
        var newURL = "https://www.thredup.com/product/women-old-navy-black-pullover-hoodie/78526144?query_id=433266555724283904&result_id=433266561130733568";
        chrome.tabs.create({
            url: newURL
        });
    }
    image5.onclick = function () {
        var newURL = "https://www.depop.com/products/forestfashion-vintage-champion-zip-up-hoodie-1a57/";
        chrome.tabs.create({
            url: newURL
        });
    }
    image6.onclick = function () {
        var newURL = "https://www.thredup.com/product/women-viscose-zara-black-pullover-hoodie/84549939?query_id=433266555724283904&result_id=433266561130733568";
        chrome.tabs.create({
            url: newURL
        });
    }
}

SearchWhite();
SearchBlack();


document.querySelector('.search').addEventListener('change', function () {
    var userInput = document.querySelector('.search').value;
    if (userInput == "white") {
        ShowMainWhite();
        SearchWhite();
    }
})

document.querySelector('.search').addEventListener('change', function () {
    var userInput = document.querySelector('.search').value;
    if (userInput == "black") {
        ShowMainBlack();
        SearchBlack();
    }
})