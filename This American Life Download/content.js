const body = document.querySelector("body");
const item = document.getElementById("item");

console.log(item);

let questionAdded = false;
const config = { attributes: true, childList: true, subtree: true };

let myAudio = new Audio(); 
myAudio.src = chrome.extension.getURL("pinwheel.mp3"); 

function questionAlert(counter) {
    if(counter < 8) {
        setTimeout(function() {
            myAudio.play();
            ++counter;
            questionAlert(counter);
        }, 3000);
    }
}

const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        // Inside of the parent will change once the question is added
        if (mutation.type === 'childList') {
            questionAlert(0);
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(item, config);