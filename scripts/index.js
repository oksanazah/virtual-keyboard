const body = document.getElementById('body');

const switchLang = () => {
  const key = localStorage.getItem('lang');
  const enKeys = document.querySelector('.en');
  const ruKeys = document.querySelector('.ru');

  if (key === 'ru') {
    localStorage.setItem('lang', 'en');

    enKeys.classList.remove('hide');
    ruKeys.classList.add('hide');
  } else {
    localStorage.setItem('lang', 'ru');

    enKeys.classList.add('hide');
    ruKeys.classList.remove('hide');
  }
};

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey) {
    switchLang();
  }
});

body.innerHTML = `
    <div class="container">
      <h1>RSS Virtual Keyboard</h1>
      <textarea class="textarea" id="textarea" cols="30" rows="10" readonly></textarea>
      <div class="keyboard">
        <div class="row">
          <div class="key en Backquote">\`</div>
          <div class="key ru Backquote hide">ё</div>
          <div class="key Digit1">1</div>
          <div class="key Digit2">2</div>
          <div class="key Digit3">3</div>
          <div class="key Digit4">4</div>
          <div class="key Digit5">5</div>
          <div class="key Digit6">6</div>
          <div class="key Digit7">7</div>
          <div class="key Digit8">8</div>
          <div class="key Digit9">9</div>
          <div class="key Digit0">0</div>
          <div class="key Minus">-</div>
          <div class="key Equal">=</div>
          <div class="key Backspace">Backspace</div>
        </div>
        <div class="row">
          <div class="key Tab">Tab</div>
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
          <div class="key Backslash">\\</div>
          <div class="key Delete">Del</div>
        </div>
        <div class="row">
          <div class="key CapsLock">CapsLock</div>
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
          <div class="key Enter">Enter</div>
        </div>
        <div class="row">
          <div class="key ShiftLeft">Shift</div>
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
          <div class="key ArrowUp">↑</div>
          <div class="key ShiftRight">Shift</div>
        </div>
        <div class="row">
          <div class="key ControlLeft">Ctrl</div>
          <div class="key MetaLeft">Win</div>
          <div class="key AltLeft">Alt</div>
          <div class="key Space">&nbsp</div>
          <div class="key AltRight">Alt</div>
          <div class="key ArrowLeft">←</div>
          <div class="key ArrowDown">↓</div>
          <div class="key ArrowRight">→</div>
          <div class="key ControlRight">Ctrl</div>
        </div>
      </div>
      <p>The keyboard was created in the Windows operating system</p>
      <p>To switch the language combination: left ctrl + alt</p>
    </div>
`;

const keyboard = document.querySelector('.keyboard');
const textarea = document.getElementById('textarea');

keyboard.addEventListener('click', (event) => {
  if (
    event.target.tagName === 'DIV'
    && event.target.className.includes('key ')
    && !event.target.className.includes('Backspace')
    && !event.target.className.includes('Delete')
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
  ) {
    textarea.value += event.target.textContent;
  }
});

document.addEventListener('keydown', (event) => {
  const key = document.querySelector(`.${event.code}`);

  if (key) {
    key.classList.add('key-active');
  }

  if (
    key
    && event.code !== 'Backspace'
    && event.code !== 'Delete'
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
  ) {
    textarea.value += key.textContent;
  }
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelector(`.${event.code}`);

  if (key) {
    key.classList.remove('key-active');
  }
});
