


function login(){
  var email= document.getElementById('email'); 
  var password=document.getElementById('password');

  var getJSON1 = localStorage.getItem('email');
  var getJSON2 = localStorage.getItem('password');

  if (email == getJSON1 && password == getJSON2){
    document.location.href = "file:///C:/Users/ANANT%20VERMA/Documents/GitHub/Signup-and-login-page-redirect-to-responsive-CV-.github.io/cv.html";
    return false;
  }
  else{
    alert("Invalid Email and Password");
  }

}
