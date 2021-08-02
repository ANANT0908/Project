const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var button  = document.getElementById("button");
form.addEventListener('submit', e => {
	e.preventDefault();

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		return false;
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		return false;
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		return false;
	} 
	else if(passwordValue.length < 6) {
		setErrorFor(password, 'Minimun 6 character');
		return false;
	}else if(passwordValue.search(/[a-z]/) < 0){
		setErrorFor(password, 'Minimun one LOWERCASE character required');
		return false;
	}
	else if(passwordValue.search(/[A-Z]/) < 0){
		setErrorFor(password, 'Minimun one UPPERCASE character required');
		return false;
	}
	else if(passwordValue.search(/[0-9]/) < 0){
		setErrorFor(password, 'Minimun one NUMERIC character required');
		return false;
	}
	else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		return false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
		return false;
	}
	 else{
		setSuccessFor(password2);
	}


	localStorage.setItem("e",email);
	localStorage.setItem("p",password);

	document.location.href = 'file:///C:/Users/ANANT%20VERMA/Documents/GitHub/Signup-and-login-page-redirect-to-responsive-CV-.github.io/login.html';

	
	
	return false;

});



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	