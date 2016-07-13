function back_hi() {
    alert("Hi! 来自background");

    var header = document.getElementById('header');
    if (header) {
        alert("来自background：" + header.innerHTML);
    }
}

chrome.tabs.onUpdated.addListener(back_hi);
