 window.addEventListener('keydown',playSound)

 const keys=document.querySelectorAll('.key')

 keys.forEach(key => key.addEventListener('transitionend', removeTransition));

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.currentTime=0;
    audio.play()
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.add('playing') 
  }