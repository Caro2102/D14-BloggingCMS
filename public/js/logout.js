//Función para cerrar sesión
const logout = async () => {
  const response = await fetch('/api/users/logout', { //Fetch /api/users/logout con método POST para cerrar sesión
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) { //Si la respuest está bien
    document.location.replace('/'); //Regresar a Home
  } else { //If not
    alert('Failed to log out.'); 
  }
};

  //Agregar al boton la funcion para cerrar sesión
  document.querySelector('#btnLogout').addEventListener('click', logout);
