// Function to fast forward the video
function forwardVideo() {
  let video = document.querySelector('video');
  if (video) {
    video.currentTime += 10;
  }
}

// Function to rewind the video
function rewindVideo() {
  let video = document.querySelector('video');
  if (video) {
    video.currentTime -= 10;
  }
}

// Listen to keyboard events
document.addEventListener('keydown', function(event) {
  // Fast forward with the "D" key
  if (event.key === 'd') {
    forwardVideo();
  }
  // Rewind with the "A" key
  if (event.key === 'a') {
    rewindVideo();
  }
});