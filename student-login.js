 // Import the functions you need from the SDKs you need
 import { initializeApp,   getAuth,
    signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAPBa4MNxlDRteOvC3v8RotyufBpwpHzz0",
  authDomain: "teacher-student-booking.firebaseapp.com",
  projectId: "teacher-student-booking",
  storageBucket: "teacher-student-booking.appspot.com",
  messagingSenderId: "758091409413",
  appId: "1:758091409413:web:66ca954e6597faef0f146c"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const auth = getAuth();

  document.getElementById('slogin').addEventListener('submit' , login);
  var email = getElementById("email");
  var password = getElementById("password");


  function login(e){
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value,
      };
       
          signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then((success) => {

      window.location.replace('student.html')
   
  })
  console.log(obj);

  }

