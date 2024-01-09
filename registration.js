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

  var registration = firebase.database().ref('registration');

  document.getElementById('reg').addEventListener('submit' , submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var rollno = getInputVal('rollno');
    var email = getInputVal('email');
    var password = getInputVal('password');

    newRegistration(name, rollno, email, password);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';

    },2000);

    document.getElementById('reg').reset();

  }



  function getInputVal(id){
    return document.getElementById(id).value;
  }



  function newRegistration(name, rollno, email, password){
    var newReg = registration.push();
    newReg.set(
        {
            name: name,
            rollno: rollno,
            email: email,
            password: password
        }
    );
  }