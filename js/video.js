const videoDetail = document.querySelector("#video1");
const btnPlay = document.querySelector("#btnPausa");
const stopBtn = document.querySelector("#btnReiniciar");
const previousBtn = document.querySelector("#btnRetroceder");
const advanceBtn = document.querySelector("#btnAvanzar");
const sound = document.querySelector("#mute");

videoDetail.addEventListener("click", () => {
    if (videoDetail.paused) videoDetail.play();
    else videoDetail.pause();
});

btnPlay.addEventListener("click", () => {
    if (videoDetail.paused) videoDetail.play();
    else videoDetail.pause();
});

stopBtn.addEventListener("click", () => {
    videoDetail.pause();
    videoDetail.currentTime = 0;
});

previousBtn.addEventListener("click", () => {
    videoDetail.currentTime -= 5;
});

advanceBtn.addEventListener("click", () => {
    videoDetail.currentTime += 5;
});

sound.addEventListener("click", () => {
    if (videoDetail.muted) {
        videoDetail.muted=false;
        sound.style.background = "#fff";
    } else {
        videoDetail.muted=true;
        sound.style.background = "#ff9d00";
    }
});

function getFullscreen(element){
    if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
  };

document.getElementById("full").addEventListener("click", function(e){
 getFullscreen(document.getElementById("video1"));
},false);

