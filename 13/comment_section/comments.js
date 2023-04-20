function send() {
    let chat = document.querySelector('.chat');

    let showNameNo = document.querySelector('#show-name-no');

    let avatarText = document.querySelector('.avatar__text');
    let avatarTextValue = avatarText.value;

    if (avatarText.value) {

        chat.insertAdjacentHTML('beforeend', `<img class="avatar__image" src="${avatarTextValue}">`);
    } else {
        let pic=new Array(
            '<img src="/comment_section/1.jpg">',
            '<img src="/comment_section/2.jpg">',
            '<img src="/comment_section/3.jpg">',
            '<img src="/comment_section/4.jpg">',
            '<img src="/comment_section/5.jpg">'
            );
            n=Math.floor(Math.random() * 5);
        chat.insertAdjacentHTML('beforeend', `<img class="avatar__image" src="/comment_section/${[n]}.jpg">`);
    }

    chat.insertAdjacentHTML('beforeend', '<div class="name__comment"></div>');

    let nameComment = document.querySelector('.name__comment');

    let showNameYes = document.querySelector('#show-name-yes');

    if (showNameYes.checked) {
        let nameText = document.querySelector('.name__text');
        let nameTextValue = nameText.value;
        let nameTextReady = nameTextValue.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});

        nameComment.insertAdjacentHTML('beforeend', `<div class="name__display">${nameTextReady}</div>`);
    } else {
        nameComment.insertAdjacentHTML('beforeend', `<div class="name__display">username</div>`);
    }
    
    let commentText = document.querySelector('.comment__text');
    let commentTextValue = commentText.value;
    let commentTextReady = commentTextValue.replace(/viagra/gi, '***')
                                            .replace(/XXX/gi, '***');

    nameComment.insertAdjacentHTML('beforeend', `<div class="comment__display">${commentTextReady}</div>`);

    let date = new Date();

    chat.insertAdjacentHTML('beforeend', `<div class="date__display">${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</div>`);

    
    
    
    
}