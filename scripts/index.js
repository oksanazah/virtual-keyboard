const body = document.getElementById('body');
const initLang = localStorage.getItem('lang');

body.innerHTML = `
    <div class="container">
      <h1>RSS Virtual Keyboard</h1>
      <textarea class="textarea" id="textarea" cols="30" rows="10"></textarea>
      <div class="keyboard">
        <div class="row">
          <div class="key en Backquote">\`</div>
          <div class="key ru Backquote hide">ё</div>
          <div class="key en Digit1">1</div>
          <div class="key ru Digit1 hide">1</div>
          <div class="key en Digit2">2</div>
          <div class="key ru Digit2 hide">2</div>
          <div class="key en Digit3">3</div>
          <div class="key ru Digit3 hide">3</div>
          <div class="key en Digit4">4</div>
          <div class="key ru Digit4 hide">4</div>
          <div class="key en Digit5">5</div>
          <div class="key ru Digit5 hide">5</div>
          <div class="key en Digit6">6</div>
          <div class="key ru Digit6 hide">6</div>
          <div class="key en Digit7">7</div>
          <div class="key ru Digit7 hide">7</div>
          <div class="key en Digit8">8</div>
          <div class="key ru Digit8 hide">8</div>
          <div class="key en Digit9">9</div>
          <div class="key ru Digit9 hide">9</div>
          <div class="key en Digit0">0</div>
          <div class="key ru Digit0 hide">0</div>
          <div class="key en Minus">-</div>
          <div class="key ru Minus hide">-</div>
          <div class="key en Equal">=</div>
          <div class="key ru Equal hide">=</div>
          <div class="key en Backspace">Backspace</div>
          <div class="key ru Backspace hide">Backspace</div>
        </div>
        <div class="row">
          <div class="key en Tab">Tab</div>
          <div class="key ru Tab hide">Tab</div>
          <div class="key en KeyQ">q</div>
          <div class="key ru KeyQ hide">й</div>
          <div class="key en KeyW">w</div>
          <div class="key ru KeyW hide">ц</div>
          <div class="key en KeyE">e</div>
          <div class="key ru KeyE hide">у</div>
          <div class="key en KeyR">r</div>
          <div class="key ru KeyR hide">к</div>
          <div class="key en KeyT">t</div>
          <div class="key ru KeyT hide">е</div>
          <div class="key en KeyY">y</div>
          <div class="key ru KeyY hide">н</div>
          <div class="key en KeyU">u</div>
          <div class="key ru KeyU hide">г</div>
          <div class="key en KeyI">i</div>
          <div class="key ru KeyI hide">ш</div>
          <div class="key en KeyO">o</div>
          <div class="key ru KeyO hide">щ</div>
          <div class="key en KeyP">p</div>
          <div class="key ru KeyP hide">з</div>
          <div class="key en BracketLeft">[</div>
          <div class="key ru BracketLeft hide">х</div>
          <div class="key en BracketRight">]</div>
          <div class="key ru BracketRight hide">ъ</div>
          <div class="key en Backslash">\\</div>
          <div class="key ru Backslash hide">\\</div>
        </div>
        <div class="row">
          <div class="key en CapsLock">CapsLock</div>
          <div class="key ru CapsLock hide">CapsLock</div>
          <div class="key en KeyA">a</div>
          <div class="key ru KeyA hide">ф</div>
          <div class="key en KeyS">s</div>
          <div class="key ru KeyS hide">ы</div>
          <div class="key en KeyD">d</div>
          <div class="key ru KeyD hide">в</div>
          <div class="key en KeyF">f</div>
          <div class="key ru KeyF hide">а</div>
          <div class="key en KeyG">g</div>
          <div class="key ru KeyG hide">п</div>
          <div class="key en KeyH">h</div>
          <div class="key ru KeyH hide">р</div>
          <div class="key en KeyJ">j</div>
          <div class="key ru KeyJ hide">о</div>
          <div class="key en KeyK">k</div>
          <div class="key ru KeyK hide">л</div>
          <div class="key en KeyL">l</div>
          <div class="key ru KeyL hide">д</div>
          <div class="key en Semicolon">;</div>
          <div class="key ru Semicolon hide">ж</div>
          <div class="key en Quote">'</div>
          <div class="key ru Quote hide">э</div>
          <div class="key en Enter">Enter</div>
          <div class="key ru Enter hide">Enter</div>
        </div>
        <div class="row">
          <div class="key en ShiftLeft">Shift</div>
          <div class="key ru ShiftLeft hide">Shift</div>
          <div class="key en KeyZ">z</div>
          <div class="key ru KeyZ hide">я</div>
          <div class="key en KeyX">x</div>
          <div class="key ru KeyX hide">ч</div>
          <div class="key en KeyC">c</div>
          <div class="key ru KeyC hide">с</div>
          <div class="key en KeyV">v</div>
          <div class="key ru KeyV hide">м</div>
          <div class="key en KeyB">b</div>
          <div class="key ru KeyB hide">и</div>
          <div class="key en KeyN">n</div>
          <div class="key ru KeyN hide">т</div>
          <div class="key en KeyM">m</div>
          <div class="key ru KeyM hide">ь</div>
          <div class="key en Comma">,</div>
          <div class="key ru Comma hide">б</div>
          <div class="key en Period">.</div>
          <div class="key ru Period hide">ю</div>
          <div class="key en Slash">/</div>
          <div class="key ru Slash hide">.</div>
          <div class="key en ArrowUp">↑</div>
          <div class="key ru ArrowUp hide">↑</div>
          <div class="key en ShiftRight">Shift</div>
          <div class="key ru ShiftRight hide">Shift</div>
        </div>
        <div class="row">
          <div class="key en ControlLeft">Ctrl</div>
          <div class="key ru ControlLeft hide">Ctrl</div>
          <div class="key en MetaLeft">Win</div>
          <div class="key ru MetaLeft hide">Win</div>
          <div class="key en AltLeft">Alt</div>
          <div class="key ru AltLeft hide">Alt</div>
          <div class="key en Space">&nbsp</div>
          <div class="key ru Space hide">&nbsp</div>
          <div class="key en AltRight">Alt</div>
          <div class="key ru AltRight hide">Alt</div>
          <div class="key en ArrowLeft">←</div>
          <div class="key ru ArrowLeft hide">←</div>
          <div class="key en ArrowDown">↓</div>
          <div class="key ru ArrowDown hide">↓</div>
          <div class="key en ArrowRight">→</div>
          <div class="key ru ArrowRight hide">→</div>
          <div class="key en ControlRight">Ctrl</div>
          <div class="key ru ControlRight hide">Ctrl</div>
        </div>
      </div>
      <p>The keyboard was created in the Windows operating system</p>
      <p>To switch the language combination: left ctrl + alt</p>
    </div>
`;

if (!initLang || initLang === 'en') {
  localStorage.setItem('lang', 'en');

  document.querySelectorAll('.en').forEach((el) => {
    el.classList.remove('hide');
  });
  document.querySelectorAll('.ru').forEach((el) => {
    el.classList.add('hide');
  });
}
if (initLang === 'ru') {
  document.querySelectorAll('.en').forEach((el) => {
    el.classList.add('hide');
  });
  document.querySelectorAll('.ru').forEach((el) => {
    el.classList.remove('hide');
  });
}

const switchLang = () => {
  const lang = localStorage.getItem('lang');
  const enKeys = document.querySelectorAll('.en');
  const ruKeys = document.querySelectorAll('.ru');

  if (lang === 'ru') {
    localStorage.setItem('lang', 'en');

    enKeys.forEach((el) => {
      el.classList.remove('hide');
    });

    ruKeys.forEach((el) => {
      el.classList.add('hide');
    });
  } else {
    localStorage.setItem('lang', 'ru');

    enKeys.forEach((el) => {
      el.classList.add('hide');
    });

    ruKeys.forEach((el) => {
      el.classList.remove('hide');
    });
  }
};

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey) {
    switchLang();
  }
});

const keyboard = document.querySelector('.keyboard');
const textarea = document.getElementById('textarea');
const caps = document.getElementsByClassName('CapsLock');

keyboard.addEventListener('click', (event) => {
  if (
    event.target.tagName === 'DIV'
    && event.target.className.includes('key ')
    && !event.target.className.includes('Backspace')
    && !event.target.className.includes('Enter')
    && !event.target.className.includes('ShiftLeft')
    && !event.target.className.includes('ShiftRight')
    && !event.target.className.includes('ControlLeft')
    && !event.target.className.includes('ControlRight')
    && !event.target.className.includes('AltLeft')
    && !event.target.className.includes('AltRight')
    && !event.target.className.includes('CapsLock')
    && !event.target.className.includes('MetaLeft')
    && !event.target.className.includes('Tab')
    && (!caps[0].className.includes('key-active')
    || !caps[1].className.includes('key-active'))
  ) {
    textarea.value += event.target.textContent;
  } if (
    event.target.tagName === 'DIV'
    && event.target.className.includes('key ')
    && !event.target.className.includes('Backspace')
    && !event.target.className.includes('Enter')
    && !event.target.className.includes('ShiftLeft')
    && !event.target.className.includes('ShiftRight')
    && !event.target.className.includes('ControlLeft')
    && !event.target.className.includes('ControlRight')
    && !event.target.className.includes('AltLeft')
    && !event.target.className.includes('AltRight')
    && !event.target.className.includes('CapsLock')
    && !event.target.className.includes('MetaLeft')
    && !event.target.className.includes('Tab')
    && (caps[0].className.includes('key-active')
    || caps[1].className.includes('key-active'))
  ) {
    textarea.value += event.target.textContent.toUpperCase();
  } if (event.target.className.includes('Tab')) {
    textarea.value += '    ';
  } if (event.target.className.includes('Enter')) {
    textarea.value += '\n';
  } if (event.target.className.includes('Backspace')) {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  } if (event.target.className.includes('CapsLock') && !event.target.className.includes('key-active')) {
    [...caps].forEach((el) => el.classList.add('key-active'));
  } else if (event.target.className.includes('CapsLock') && event.target.className.includes('key-active')) {
    [...caps].forEach((el) => el.classList.remove('key-active'));
  }
});

textarea.addEventListener('keypress', (event) => {
  event.preventDefault();
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const lang = localStorage.getItem('lang');
  const key = document.getElementsByClassName(`${lang} ${event.code}`)[0];

  if (key) {
    key.classList.add('key-active');
  }

  if (
    key
    && event.code !== 'Backspace'
    && event.code !== 'Enter'
    && event.code !== 'ShiftLeft'
    && event.code !== 'ShiftRight'
    && event.code !== 'ControlLeft'
    && event.code !== 'ControlRight'
    && event.code !== 'AltLeft'
    && event.code !== 'AltRight'
    && event.code !== 'CapsLock'
    && event.code !== 'MetaLeft'
    && event.code !== 'Tab'
    && (!caps[0].className.includes('key-active')
    || !caps[1].className.includes('key-active'))
  ) {
    textarea.value += key.textContent;
  } if (
    key
    && event.code !== 'Backspace'
    && event.code !== 'Enter'
    && event.code !== 'ShiftLeft'
    && event.code !== 'ShiftRight'
    && event.code !== 'ControlLeft'
    && event.code !== 'ControlRight'
    && event.code !== 'AltLeft'
    && event.code !== 'AltRight'
    && event.code !== 'CapsLock'
    && event.code !== 'MetaLeft'
    && event.code !== 'Tab'
    && (caps[0].className.includes('key-active')
    || caps[1].className.includes('key-active'))
  ) {
    textarea.value += key.textContent.toUpperCase();
  } if (event.code === 'Tab') {
    textarea.value += '    ';
  } if (event.code === 'Enter') {
    textarea.value += '\n';
  } if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  } if (
    event.code === 'CapsLock'
    && (!caps[0].className.includes('key-active')
    || !caps[1].className.includes('key-active'))
  ) {
    [...caps].forEach((el) => el.classList.add('key-active'));
  } else if (
    event.code === 'CapsLock'
    && (caps[0].className.includes('key-active')
    || caps[1].className.includes('key-active'))
  ) {
    [...caps].forEach((el) => el.classList.remove('key-active'));
  }
});

document.addEventListener('keyup', (event) => {
  const lang = localStorage.getItem('lang');
  const key = document.getElementsByClassName(`${lang} ${event.code}`)[0];

  if (key && !key.className.includes('CapsLock')) {
    key.classList.remove('key-active');
  }
});
