let playBtn = document.querySelector("a.play");
let playBtnContainer = document.querySelector("div.episode-title");
let playBtnClicked = false;

playBtn.addEventListener("click", () => {
    if(!playBtnClicked) {
        let downloadAnchor = document.createElement("a");
        let mp3Link = document.getElementById("jp_audio_0").getAttribute("src");

        downloadAnchor.classList.add("download-link");
        downloadAnchor.setAttribute("href", mp3Link);
        downloadAnchor.innerText = "Download";

        playBtnContainer.appendChild(downloadAnchor);
        playBtnClicked = true;
    }
});