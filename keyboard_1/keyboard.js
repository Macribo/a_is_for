let input = [];
let inputString;

let keyPosTop = 100;
let keyPosLeft = 200;
let altDown = false;
let character = document.getElementById('character');
runCharacter = () => {
  character.style.display = 'block';
  setTimeout(function() {
    character.style.display = 'none';
  }, 1000);
};
window.addEventListener('keydown', function(e) {
  //   console.log('keycode: ' + e.keycode);
  if (altDown === false) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (e.keyCode == '65') {
      character.style.backgroundImage = 'url(./images/a.png)';
      runCharacter();
    }

    if (e.keyCode == '66') {
      character.style.backgroundImage = 'url(./images/b.png)';
      runCharacter();
    }

    if (e.keyCode == '69') {
      character.style.backgroundImage = 'url(./images/e.png)';
      runCharacter();
    }

    if (e.keyCode == '74') {
      character.style.backgroundImage = 'url(./images/j.jpg)';
      runCharacter();
    }

    if (e.keyCode == '77') {
      character.style.backgroundImage = 'url(./images/m.png)';
      runCharacter();
    }

    if (e.keyCode == '80') {
      character.style.backgroundImage = 'url(./images/p.jpg)';
      runCharacter();
    }

    if (e.keyCode == '82') {
      character.style.backgroundImage = 'url(./images/r.png)';
      runCharacter();
    }

    if (e.keyCode == '83') {
      character.style.backgroundImage = 'url(./images/s.jpg)';
      runCharacter();
    }

    if (e.keyCode == '84') {
      character.style.backgroundImage = 'url(./images/t.png)';
      runCharacter();
    }

    if (e.keyCode == '87') {
      character.style.backgroundImage = 'url(./images/w.jpg)';
      runCharacter();
    }

    if (e.keyCode == '13') {
      console.log(inputString);
      inputString = input.toString();
      input = [];
    } else {
      //   key.style.position = 'absolute';
      key.style.top = keyPosTop + 'px';
      key.style.left = keyPosLeft + 'px';
      keyPosLeft += 100;
      console.log('kpl ' + keyPosLeft);

      if (keyPosLeft >= 1000) {
        keyPosLeft = 200;
        keyPosTop += 100;
      }

      if (keyPosTop >= 500) {
        //keyPosLeft = 200;
        keyPosTop = 100;
      }

      if (!audio) return;
      console.log(e.keyCode);
      console.log(audio);
      audio.currentTime = 0;
      audio.play();
      //  document.getElementById('theKeys').style.display="grid";
      key.style.color = createHue();

      key.classList.add('playing');
      input.push(key.id);
      console.log(input);
    }
  } else if (altDown) {
  }
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function createHue() {
  let hue =
    'rgb(' +
    (Math.floor(Math.random() * 200) + 56) +
    ',' +
    (Math.floor(Math.random() * 200) + 56) +
    ',' +
    (Math.floor(Math.random() * 200) + 56) +
    ')';
  console.log(hue);
  return hue;
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 225) {
    console.log('alt');
    altDown = true;
    //e.preventDefault();
  }
});
