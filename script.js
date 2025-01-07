// Select the audio element
const audio = document.getElementById('background-audio');

// Function to start the music and control timing
function playAudioWithTiming() {
  // Play the audio
  audio.currentTime = 0; // Reset to the start
  audio.play();

  // Stop the audio after 7 seconds (2s visible + 5s fade out)
  setTimeout(() => {
    audio.pause();
  }, 7000);
}

// Ensure the image is removed from the DOM after 7 seconds
setTimeout(() => {
  const backgroundContainer = document.getElementById('background-container');
  backgroundContainer.style.display = 'none';
}, 7000);

// Call the function on page load
playAudioWithTiming();
