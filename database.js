  // Import the functions you need from the SDKs you need
import { initializeApp }
 from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import{
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    OAuthProvider,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDE3BNbrepcvN5ykhG8BaMM-eUBNXtIUrw",
    authDomain: "codeblooded-f07f6.firebaseapp.com",
    projectId: "codeblooded-f07f6",
    storageBucket: "codeblooded-f07f6.firebasestorage.app",
    messagingSenderId: "143682941397",
    appId: "1:143682941397:web:4862d89145decb63cd0d5c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //Google
  document.getElementById("google").onclick=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then(result=>{
        console.log(result.user);
    }).catch(error=>console.error(error));
  }
  //Facebook
document.getElementById("facebook").onclick=()=>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth,provider)
  };
  //Microsoft
document.getElementById("microsoft").onclick=()=>{
    const provider = new OAuthProvider('microsoft.com');
    signInWithPopup(auth,provider)
  };
  //Apple
document.getElementById("apple").onclick=()=>{
    const provider = new OAuthProvider('apple.com');
    signInWithPopup(auth,provider)
  };
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick=()=>{signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
    alert("Login successful");
    window.location.href="dashboard.html";
  }).catch((error)=>{
    alert(error.message);
  });}