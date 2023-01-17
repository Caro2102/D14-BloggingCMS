async function addPost(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
      const response = await fetch(`/dashboard/`, {
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
  document.querySelector('#form-comment').addEventListener('submit', addPost);
  