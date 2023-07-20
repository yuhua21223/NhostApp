
fetch('http://localhost:3000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `
      query {
        posts {
          id
          title
          content
        }
      }
    `
    }),
})
    .then(response => response.json())
    .then(data => {
        const posts = data.data.posts;
        const postListElement = document.getElementById('post-list');

        for (const post of posts) {
            const postElement = document.createElement('p');
            postElement.textContent = post.title;
            postListElement.appendChild(postElement);
        }
    });