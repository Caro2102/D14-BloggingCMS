const cardLogin=document.getElementById('cardLogin');
const cardSignUp=document.getElementById('cardSignUp');

const changeLogin=()=>{
  if(cardLogin.classList.contains('d-block')){
    cardLogin.classList.remove("d-block");
    cardLogin.classList.add("d-none");
    cardSignUp.classList.add("d-block");
    cardSignUp.classList.remove("d-none");
  }
}
const  changeSignUp=()=>{
  if(cardSignUp.classList.contains('d-block')){
    cardSignUp.classList.remove("d-block");
    cardSignUp.classList.add("d-none");
    cardLogin.classList.add("d-block");
    cardLogin.classList.remove("d-none");
  }
}

const loginFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    const response = await fetch('/api/users/login', {
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

const signupFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && password) {
    const response = await fetch('/api/users', {
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
