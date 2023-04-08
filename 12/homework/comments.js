function send() {
    let chat = document.querySelector('.chat');

    let avatarText = document.querySelector('.avatar__text');
    let avatarTextValue = avatarText.value;

    chat.insertAdjacentHTML('beforeend', `<img class="avatar__image" src="${avatarTextValue}">`);

    chat.insertAdjacentHTML('beforeend', '<div class="name__comment"></div>');

    let nameComment = document.querySelector('.name__comment');

    let nameText = document.querySelector('.name__text');
    let nameTextValue = nameText.value;
    let nameTextReady = nameTextValue.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});

    nameComment.insertAdjacentHTML('beforeend', `<div class="name__display">${nameTextReady}</div>`);

    let commentText = document.querySelector('.comment__text');
    let commentTextValue = commentText.value;
    let commentTextReady = commentTextValue.replace(/viagra/gi, '***')
                                            .replace(/XXX/gi, '***');

    nameComment.insertAdjacentHTML('beforeend', `<div class="comment__display">${commentTextReady}</div>`);
}