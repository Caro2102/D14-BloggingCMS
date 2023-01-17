//Obtener id de la URL
const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

async function addComment(event) {
    event.preventDefault();
    const newCommentText = document.getElementById('commentText').value;//Obtener contenido del comentario
    const response = await fetch(`/`, { //Fetch / con método POST para craer un nuevo comentario  
      method: 'POST',
      method: 'POST',
      body: JSON.stringify({
        commentText:newCommentText,
        post_id:id,
        published_on: new Date(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace(`/post/${id}`);
      console.log(response);
    } else {
      alert('Failed to add comment');
    }
}  //Agregar al boton la funcion para crear comentario
document.querySelector('#form-comment').addEventListener('submit', addComment);

  