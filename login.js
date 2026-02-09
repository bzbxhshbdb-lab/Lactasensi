import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { ref, get } from
"https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

window.login = async function(){
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try{
    const cred = await signInWithEmailAndPassword(auth, email, senha);
    const uid = cred.user.uid;

    const snap = await get(ref(db, "users/"+uid));
    if(!snap.exists()){
      msg.innerText = "Usuário sem validade";
      return;
    }

    if(Date.now() > snap.val().validUntil){
      msg.innerText = "VIP expirado";
      return;
    }

    localStorage.setItem("vip","true");
    location.href="index.html";
  }catch{
    msg.innerText="Login inválido";
  }
}
