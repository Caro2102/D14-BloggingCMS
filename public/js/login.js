const cardLogin=document.getElementById('cardLogin');
const cardSignUp=document.getElementById('cardSignUp');

//Funcion para cambiar a la tarjeta de sign up
const changeLogin=()=>{
  if(cardLogin.classList.contains('d-block')){
    cardLogin.classList.remove("d-block");
    cardLogin.classList.add("d-none");
    cardSignUp.classList.add("d-block");
    cardSignUp.classList.remove("d-none");
  }
}
//Funcion para cambiar a la tarjeta de Login
const  changeSignUp=()=>{
  if(cardSignUp.classList.contains('d-block')){
    cardSignUp.classList.remove("d-block");
    cardSignUp.classList.add("d-none");
    cardLogin.classList.add("d-block");
    cardLogin.classList.remove("d-none");
  }
}
//Función para Login
const loginFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) { //Si todo los datos fueron dados
    const response = await fetch('/api/users/login', {//Fetch /api/users/login con método POST para iniciar sesión  
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json','Authorization':'Bearer {token}' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};
//Función para Sign up
const signupFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && password) {//Si todo los datos fueron dados
    const response = await fetch('/api/users', {//Fetch /api/users/login con método POST para registrase
      method: 'POST',
      body: JSON.stringify({  name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};
document.getElementById("changeLogin")
.addEventListener("click", changeLogin);
document.getElementById("changeSignUp")
.addEventListener("click", changeSignUp);


document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
