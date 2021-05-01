document.addEventListener("DOMContentLoaded", () => {
  // Set up TransitionEnd even listener on all Keys
  let allElements = document.querySelectorAll('.key');
  allElements.forEach((key) => {
      key.addEventListener('transitionend', function(e) {
          if (e.propertyName !== 'transform') return;
          this.classList.remove('playing')
      })
  })

  // Set up KeyDown Event Listener to play sound when user clicks on the correct keys
  document.addEventListener('keydown', playSound)

  function playSound (e) {
    let keyCode = e.keyCode;
    let element = document.querySelector(`.key[data-key="${keyCode}"]`);
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (element && audio) {
      element.classList.add('playing')
      audio.currentTime = 0;
      audio.play();
    }
  }

});