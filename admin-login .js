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
  firebase.initializeApp(firebaseConfig);
    const auth = getAuth();

  document.getElementById('alogin').addEventListener('submit' , login);

  function login(e){
    e.preventDefault();

        var email = getElementById(email).value;
        var password = getElementById(password).value;

       
          signInWithEmailAndPassword(auth, email, password)
  .then((success) => {

      window.location.replace('admin.html')
   
  })

  }