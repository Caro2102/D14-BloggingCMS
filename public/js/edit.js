// window.location nos da acceso a la URL. Luego, usamos el método .split() para acceder al número al final de la URL y establecerlo igual al identificador.
const id = window.location.toString().split('/')[
window.location.toString().split('/').length - 1
];

async function updatePost(event) {
    event.preventDefault();
    const nTitle = document.getElementById('title').value;
    const nContent = document.getElementById('postText').value;
    
    const response = await fetch(`/dashboard/${id}`,{
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

  async function deletePost(event) {
    event.preventDefault();
   
    const response = await fetch(`/dashboard/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert('Failed to edit post');
    }
  }

  document.querySelector('#btnUpdate').addEventListener('click', updatePost);
  document.querySelector('#btnDelete').addEventListener('click', deletePost);
