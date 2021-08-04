
function login(){
  var email= document.getElementById('email'); 
  var password=document.getElementById('password');

  if (email == localStorage.getItem("e") && password == localStorage.getItem("p")){
    document.location.href = "file:///C:/Users/ANANT%20VERMA/Desktop/PROJECT/Project1/cv.html";
    return false;
  }
  else{
    alert("Invalid Email and Password");
  }

}