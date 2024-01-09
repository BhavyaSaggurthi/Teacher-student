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

   var appointment = firebase.database().ref('teacher_appointment');

  document.getElementById('appointment').addEventListener('submit' , submitForm);

  function submitForm(e){
    e.preventDefault();

    var student_name = getInputVal('student_name');   
    var subject = getInputVal('subject');
    var date = getInputVal('date');
    var time = getInputVal('time');
    var teacher_name = getInputVal('teacher_name');


    bookAppoinment(teacher_name, subject, date, time, student_name);

     document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';

     },2000);

    document.getElementById('appointment').reset();

  }



  function getInputVal(id){
    return document.getElementById(id).value;
  }



  function bookAppoinment(teacher_name, subject, date, time, student_name){
    var newAppointment = appointment.push();
    newAppointment.set(
        {
            teacher_name: teacher_name,
            subject: subject,
            date: date,
            time: time,
            student_name: student_name

        }
    );
  }