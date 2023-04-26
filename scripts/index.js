const body = document.getElementById('body');

body.innerHTML = `
    <div class="container">
      <h1>RSS Virtual Keyboard</h1>
      <textarea class="textarea" id="textarea" cols="30" rows="10"></textarea>
      <div class="keyboard">
        <div class="row">
          <div class="key backtick">\`</div>
          <div class="key digit1">1</div>
          <div class="key digit2">2</div>
          <div class="key digit3">3</div>
          <div class="key digit4">4</div>
          <div class="key digit5">5</div>
          <div class="key digit6">6</div>
          <div class="key digit7">7</div>
          <div class="key digit8">8</div>
          <div class="key digit9">9</div>
          <div class="key digit0">0</div>
          <div class="key minus">-</div>
          <div class="key equal">=</div>
          <div class="key backspace">Backspace</div>
        </div>
        <div class="row">
          <div class="key tab">Tab</div>
          <div class="key letter-q">q</div>
          <div class="key letter-w">w</div>
          <div class="key letter-e">e</div>
          <div class="key letter-r">r</div>
          <div class="key letter-t">t</div>
          <div class="key letter-y">y</div>
          <div class="key letter-u">u</div>
          <div class="key letter-i">i</div>
          <div class="key letter-o">o</div>
          <div class="key letter-p">p</div>
          <div class="key left-bracket">[</div>
          <div class="key right-bracket">]</div>
          <div class="key backslash">\\</div>
          <div class="key delete">Del</div>
        </div>
        <div class="row">
          <div class="key capslock">CapsLock</div>
          <div class="key letter-a">a</div>
          <div class="key letter-s">s</div>
          <div class="key letter-d">d</div>
          <div class="key letter-f">f</div>
          <div class="key letter-g">g</div>
          <div class="key letter-h">h</div>
          <div class="key letter-j">j</div>
          <div class="key letter-k">k</div>
          <div class="key letter-l">l</div>
          <div class="key semicolon">;</div>
          <div class="key quote">'</div>
          <div class="key enter">Enter</div>
        </div>
        <div class="row">
          <div class="key shift-left">Shift</div>
          <div class="key letter-z">z</div>
          <div class="key letter-x">x</div>
          <div class="key letter-c">c</div>
          <div class="key letter-v">v</div>
          <div class="key letter-b">b</div>
          <div class="key letter-n">n</div>
          <div class="key letter-m">m</div>
          <div class="key comma">,</div>
          <div class="key dot">.</div>
          <div class="key slash">/</div>
          <div class="key arrow-up">↑</div>
          <div class="key shift-right">Shift</div>
        </div>
        <div class="row">
          <div class="key control">Ctrl</div>
          <div class="key win">Win</div>
          <div class="key alt">Alt</div>
          <div class="key space">&nbsp</div>
          <div class="key alt">Alt</div>
          <div class="key arrow-left">←</div>
          <div class="key arrow-down">↓</div>
          <div class="key arrow-right">→</div>
          <div class="key control">Ctrl</div>
        </div>
      </div>
    </div>
`;
