const video = document.getElementById("videoElement");
const modalAdd = document.querySelector('#modalCamera');

navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: 'user',
        width: 400,
        height: 400
    }
}).then(
    (stream) => {
        video.srcObject = stream;

    }
).catch(
    (error) => {
        console.log(error);
    }
)

document.getElementById("tomarPhoto").addEventListener("click", () => {
    takePicture();
});

function takePicture() {
    const lienzo = document.querySelector('.containerCanvas');
    lienzo.classList.add('containerCanvasShow')
    const canvas = document.getElementById("canvasElement");
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 150, 150);
}

const openModal = () => {
    modalAdd.style.display = 'flex';
}

const closeModal = () => {
    modalAdd.style.display = 'none';
}