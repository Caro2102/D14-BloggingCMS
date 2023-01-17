//Obtener id de la URL
const id = window.location.toString().split('/')[
window.location.toString().split('/').length - 1
];
//Función para moficar post 
async function updatePost(event) {
    event.preventDefault();
    const nTitle = document.getElementById('title').value;//Obtener titulo del post
    const nContent = document.getElementById('postText').value;//Obtener contenido del post
    
    const response = await fetch(`/dashboard/${id}`,{//Fetch /dashboard/id con método PUT para modificar un post  
      method: 'PUT',
      body: JSON.stringify({
        title: nTitle,
        content: nContent,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
   
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert('Failed to edit post');
    }
}
//Función para eliminar post 
  async function deletePost(event) {
    event.preventDefault();
   
    const response = await fetch(`/dashboard/${id}`, {//Fetch /dashboard/id con método DELETE para eliminar un post  
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert('Failed to edit post');
    }
  }
  //Agregar al boton la funcion para modificar post
  document.querySelector('#btnUpdate').addEventListener('click', updatePost);
  //Agregar al boton la funcion para eliminar post
  document.querySelector('#btnDelete').addEventListener('click', deletePost);
