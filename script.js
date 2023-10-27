// ...
// Adicione uma variável para rastrear o estado de reprodução do vídeo
let videoPlaying = false;

// Adicione um ouvinte de eventos ao botão
startButton.addEventListener('click', function() {
  if (!videoPlaying) {
    // Verifique se o navegador suporta a MediaStream API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Solicite permissão para acessar a câmera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          // Atribua o fluxo de vídeo ao elemento de vídeo
          videoElement.srcObject = stream;
          videoPlaying = true;
          startButton.textContent = "Pausar Vídeo"; // Atualize o texto do botão
        })
        .catch(function(error) {
          console.error('Ocorreu um erro ao acessar a câmera: ' + error);
        });
    } else {
      console.error('A MediaStream API não é suportada neste navegador.');
    }
  } else {
    function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach((track) => {
    track.stop();
  });

  videoElem.srcObject = null;
}
stopStreamedVideo(videoElement);
videoPlaying = false;
startButton.textContent = "Iniciar Vídeo"; // Atualize o texto do botão
 
    // Se o vídeo estiver reproduzindo, pause-o
    // videoElement.pause();
    // videoPlaying = false;
    // startButton.textContent = "Iniciar Vídeo"; // Atualize o texto do botão
  }
});



// const btn = document.querySelector('.btn')
// function startVideoFromCarmera(){
    
//     navigator.mediaDevices.getUserMedia ({video: true, audio: true}).then(stream=>{

//         const videoElement = document.querySelector("#video")
//         videoElement.srcObject = stream
//     }).catch(error=>{console.log(error)})
// }
// btn.addEventListener('click', () =>  {
//      window.addEventListener("DOMContentLoaded", startVideoFromCarmera)
//  })
