const allPosts = document.querySelector('#all-posts');
let postName = document.querySelector('#post-name-input');
let postText = document.querySelector('#post-text-input');
let postButton = document.querySelector('button');


function newPost () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: `${postName.value}`,
            body: `${postText.value}`,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(function (json) {
            allPosts.innerHTML += `<div class="post-item">
                                        <h2 class="post-name">${postName.value}</h2>
                                        <p class="post-text">${postText.value}</p>
                                    </div>`;
            postName.value = '';
            postText.value = '';
        });
    
}

postButton.onclick = newPost;


