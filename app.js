// ===== MENU =====
menuBtn.onclick = () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

// ===== TELA =====
function mostrar(aba){
  menu.style.display = "none";

  if(aba === "ia"){
    conteudo.innerHTML = `
      <h2>IA LactaSensi 🤖</h2>
      <div id="chatBox" style="height:300px;overflow:auto;background:#111;padding:10px;margin-bottom:10px"></div>
      <input id="perguntaIA" placeholder="Pergunte sobre sensibilidade, DPI, mira...">
      <button onclick="enviarIA()">Enviar</button>
    `;
    return;
  }

  if(aba === "famosos"){
    conteudo.innerHTML = `
      <h2>Famosos Free Fire</h2>
      <select id="famoso">
        <option value="">Selecione</option>
        <option value="nobru">Nobru</option>
        <option value="cerol">Cerol</option>
        <option value="bak">Bak</option>
        <option value="fazoli">Fazoli</option>
        <option value="loud">LOUD</option>
        <option value="fluxo">Fluxo</option>
      </select>

      <button onclick="gerarFamoso()">Gerar DPI</button>
      <div id="dpiResultado"></div>

      <button onclick="sensibilidadeFamoso()">Gerar Sensibilidade</button>
      <div id="resultado"></div>

      <button class="fire">ATIRAR</button>
    `;
    return;
  }

  if(aba === "dpi"){
    conteudo.innerHTML = `
      <h2>DPI Android</h2>
      <button onclick="gerarDPI()">Gerar DPI</button>
      <div id="dpiResultado"></div>

      <button onclick="gerarPorDPI()">Gerar Sensibilidade</button>
      <div id="resultado"></div>
    `;
    return;
  }

  if(aba === "mira"){
    conteudo.innerHTML = `
      <h2>Mira Avançada</h2>

      <label><input type="checkbox" id="estabilizar"> Estabilizar Mira</label><br>
      <label><input type="checkbox" id="reduzirRecuo"> Reduzir Recuo</label><br>
      <label><input type="checkbox" id="antiLag"> Anti Lag</label><br><br>

      <input type="range" min="200" max="800" value="400" id="dpiVirtual"
        oninput="dpiValor.innerText='DPI Virtual: '+this.value">
      <p id="dpiValor">DPI Virtual: 400</p>

      <button onclick="gerarDPI()">Gerar DPI Android</button>
      <div id="dpiResultado"></div>

      <button onclick="gerarPorDPI()">Gerar Sensibilidade</button>
      <div id="resultado"></div>

      <button class="fire">ATIRAR</button>
    `;
  }
}

// ===== IA =====
function enviarIA(){
  let p = perguntaIA.value;
  if(!p) return;
  chatBox.innerHTML += `<b>Você:</b> ${p}<br>`;
  perguntaIA.value = "";
  setTimeout(()=>{
    chatBox.innerHTML += `<b>IA:</b> DPI entre 400 e 520 é ideal. Ajuste Red Dot para headshot.<br>`;
    chatBox.scrollTop = 9999;
  }, 600);
}

// ===== DPI =====
let dpiAtual = 0;
function gerarDPI(){
  dpiAtual = Math.floor(Math.random() * 360) + 360;
  dpiResultado.innerHTML = "DPI: " + dpiAtual;
}
function gerarPorDPI(){
  let g = Math.min(200, Math.round((dpiAtual / 400) * 90 + Math.random() * 20));
  resultado.innerHTML = `Geral:${g}<br>Red:${g-10}<br>2x:${g-20}<br>4x:${g-30}<br>AWM:${g-40}<br>Olha:${g+5}`;
}

// ===== FAMOSOS =====
let dpiF = 0;
function gerarFamoso(){
  let base = {nobru:420, cerol:480, bak:400, fazoli:460, loud:440, fluxo:500};
  let f = famoso.value;
  dpiF = base[f] + Math.floor(Math.random() * 30);
  dpiResultado.innerHTML = "DPI do famoso: " + dpiF;
}
function sensibilidadeFamoso(){
  let g = Math.min(200, Math.round((dpiF / 400) * 85 + Math.random() * 20));
  resultado.innerHTML = `Geral:${g}<br>Red:${g-10}<br>2x:${g-20}<br>4x:${g-30}<br>AWM:${g-45}<br>Olha:${g+7}`;
}

// ===== SUPORTE =====
function suporte(){
  window.open("https://wa.me/5599999999999");
                                   }
