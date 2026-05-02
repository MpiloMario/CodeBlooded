  // Import the functions you need from the SDKs you need
import { initializeApp }
 from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import{
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    TwitterAuthProvider,
    OAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
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
    //Twitter
document.getElementById("twitter").onclick=()=>{
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth,provider)
  };
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const RegisterBtn = document.getElementById("RegisterBtn");
if (loginBtn){
loginBtn.onclick=(e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
  .then(()=>{
    alert("Login successful");
    window.location.href="dashboard.html";
  })
  .catch((error)=>{
    alert(error.message);
  });
}};
if(RegisterBtn){
RegisterBtn.onclick=(e)=>{
  e.preventDefault();
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
  .then(()=>{
    alert("Registered successfully");
    window.location.href="dashboard.html";
  })
  .catch((error)=>{
    alert(error.message);
  })
}}
  lucide.createIcons();
