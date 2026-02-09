let tab="ia";
let last=null;

menuBtn.onclick=()=>menu.style.display=
menu.style.display=="flex"?"none":"flex";

function clamp(v){return Math.max(0,Math.min(200,Math.round(v)))}
function variar(b){return clamp(b+(Math.random()*14-7))}

function base(p){
if(p=="Head")return 120;
if(p=="Neck")return 110;
if(p=="Chest")return 95;
return 85;
}

function gerar(){
let p=prioridade.value;
let b=base(p);
let s;
do{
s={
Geral:variar(b),
Red:variar(b+10),
Mira2x:variar(b-8),
Mira4x:variar(b-18),
AWM:variar(b-30),
Olhadinha:variar(b+6)
}
}while(JSON.stringify(s)==JSON.stringify(last))
last=s;

resultado.innerHTML=Object.entries(s)
.map(([k,v])=>`<p>${k}: <b>${v}</b></p>`).join("");
}

function suporte(){
window.open("https://wa.me/5599999999999");
}
