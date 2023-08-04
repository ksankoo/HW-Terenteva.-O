const allPosts = document.querySelector('#all-posts');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(function (json) {
        let posts = json;
        for (i = 0; i < posts.length; i++) {
            allPosts.innerHTML += `<div class="post-item">
                                        <h2 class="post-name">Заголовок: ${posts[i].title}</h2>
                                        <p class="post-text">Статья: ${posts[i].body}</p>
                                    </div>`;
        }
    })






