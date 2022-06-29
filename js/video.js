const videoDetail = document.querySelector(".video-video");
const btnPlay = document.querySelector("#btnPausa");
const stopBtn = document.querySelector("#btnReiniciar");
const previousBtn = document.querySelector("#btnRetroceder");
const advanceBtn = document.querySelector("#btnAvanzar");

videoDetail.addEventListener("click", () => {
    if (videoDetail.paused) videoDetail.play();
    else videoDetail.pause();
});

btnPlay.addEventListener("click", () => {
    if (videoDetail.paused) videoDetail.play();
    else videoDetail.pause();
});

stopBtn.addEventListener("click", () => {
    videoDetail.play();
    videoDetail.currentTime = 0;
});

previousBtn.addEventListener("click", () => {
    videoDetail.currentTime -= 5;
});

advanceBtn.addEventListener("click", () => {
    videoDetail.currentTime += 5;
});
