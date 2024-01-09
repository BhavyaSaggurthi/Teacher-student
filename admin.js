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

  var teacher = firebase.database().ref('teacher');

  document.getElementById('add-teacher').addEventListener('submit' , submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var dept = getInputVal('dept');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var password = getInputVal('password');

    addTeacher(name, dept, subject, email, password);

    // document.querySelector('.alert').style.display = 'block';

    // setTimeout(function(){
    // document.querySelector('.alert').style.display = 'none';

    // },2000);

    document.getElementById('add-teacher').reset();

  }



  function getInputVal(id){
    return document.getElementById(id).value;
  }

    function addTeacher(name, dept, subject, email, password){
    var newTeacher = teacher.push();
    newTeacher.set(
        {
            name: name,
            dept: dept,
            subject: subject,
            email: email,
            password: password
        }
    );
  }