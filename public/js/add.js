async function addPost(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value; //Obtener titulo del post
    const content = document.querySelector('#content').value;//Obtener contenido del post
      const response = await fetch(`/dashboard/`, { //Fetch /dashboard/ con método POST para craer un nuevo post  
      method: 'POST',
      body: JSON.stringify({ 
        title:title,
        content:content,
        published_on:new Date(),

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
     document.location.replace(`/dashboard`);
     console.log(response.body);
    } else {
      alert('Post added successfully');
      console.log(response.body);

    }
  }
  //Agregar al boton la funcion para crear post
  document.querySelector('#form-comment').addEventListener('submit', addPost);
  