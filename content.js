function content_hi() {
    alert("Hi! 来自content");

    var header = document.getElementById('header');
    if (header) {
        alert("来自content：" + header.innerHTML);
    }
}

chrome.tabs.onUpdated.addListener(content_hi);
