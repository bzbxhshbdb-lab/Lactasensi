<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAbg6mBpPKu81XDDXzy2etY5YsMgGGRt_I",
  authDomain: "painel-adm-login.firebaseapp.com",
  databaseURL: "https://painel-adm-login-default-rtdb.firebaseio.com",
  projectId: "painel-adm-login",
  storageBucket: "painel-adm-login.firebasestorage.app",
  messagingSenderId: "899439278983",
  appId: "1:899439278983:web:6b1e930946d1c947f8b122"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
</script>
