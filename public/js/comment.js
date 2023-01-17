// window.location nos da acceso a la URL. Luego, usamos el método .split() para acceder al número al final de la URL y establecerlo igual al identificador.
const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

async function addComment(event) {
    event.preventDefault();
    const newCommentText = document.getElementById('commentText').value;
    const response = await fetch(`/`, {
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
}
document.querySelector('#form-comment').addEventListener('submit', addComment);

  