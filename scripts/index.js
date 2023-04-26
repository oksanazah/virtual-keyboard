const body = document.getElementById('body');

body.innerHTML = `
    <div class="container">
      <h1>RSS Virtual Keyboard</h1>
      <textarea class="textarea" id="textarea" cols="30" rows="10"></textarea>
      <div class="keyboard">
        <div class="row">
          <div class="key Backquote">\`</div>
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
          <div class="key KeyQ">q</div>
          <div class="key KeyW">w</div>
          <div class="key KeyE">e</div>
          <div class="key KeyR">r</div>
          <div class="key KeyT">t</div>
          <div class="key KeyY">y</div>
          <div class="key KeyU">u</div>
          <div class="key KeyI">i</div>
          <div class="key KeyO">o</div>
          <div class="key KeyP">p</div>
          <div class="key BracketLeft">[</div>
          <div class="key BracketRight">]</div>
          <div class="key Backslash">\\</div>
          <div class="key Delete">Del</div>
        </div>
        <div class="row">
          <div class="key CapsLock">CapsLock</div>
          <div class="key KeyA">a</div>
          <div class="key KeyS">s</div>
          <div class="key KeyD">d</div>
          <div class="key KeyF">f</div>
          <div class="key KeyG">g</div>
          <div class="key KeyH">h</div>
          <div class="key KeyJ">j</div>
          <div class="key KeyK">k</div>
          <div class="key KeyL">l</div>
          <div class="key Semicolon">;</div>
          <div class="key Quote">'</div>
          <div class="key Enter">Enter</div>
        </div>
        <div class="row">
          <div class="key ShiftLeft">Shift</div>
          <div class="key KeyZ">z</div>
          <div class="key KeyX">x</div>
          <div class="key KeyC">c</div>
          <div class="key KeyV">v</div>
          <div class="key KeyB">b</div>
          <div class="key KeyN">n</div>
          <div class="key KeyM">m</div>
          <div class="key Comma">,</div>
          <div class="key Period">.</div>
          <div class="key Slash">/</div>
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
  key.classList.add('key-active');

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
  key.classList.remove('key-active');
});
