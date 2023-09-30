// Función para adelantar el video
function forwardVideo() {
  let video = document.querySelector('video');
  if (video) {
    video.currentTime += 10;
  }
}

// Función para retroceder el video
function rewindVideo() {
  let video = document.querySelector('video');
  if (video) {
    video.currentTime -= 10;
  }
}

// Escuchar eventos del teclado
document.addEventListener('keydown', function(event) {
  // Adelantar con la tecla "D"
  if (event.key === 'd') {
    forwardVideo();
  }
  // Retroceder con la tecla "A"
  if (event.key === 'a') {
    rewindVideo();
  }
});
