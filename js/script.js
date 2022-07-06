console.log('JS OK');



/* # Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. */


//dichiaro dom
const container = document.getElementById('container');
// creiamo l'array
const post = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
                    "image": "https://unsplash.it/300/300?image=15"
                    },
        "likes": 80,
        "is_liked": true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
                    "name": "Sofia Perlari",
                    "image": "https://unsplash.it/300/300?image=10"
                    },
        "likes": 120,
        "is_liked": false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "(小苹果)你是我的小呀小苹果 就像天边最美的云朵 春天又来到了花开满山坡 种下希望就会收获 从不觉得你讨厌 你的一切都喜欢 有你的每天都新鲜",
        "media": "https://unsplash.it/600/400?image=306",
        "author": {
                    "name": "汪惟杰",
                    "image": "https://unsplash.it/300/300?image=82"
                    },
        "likes": 1412,
        "is_liked": false,
        "created": "2022-06-03"
    },
]
console.table(post);
//Prendendo come riferimento il layout di esempio presente nell'html
for (let i = 0; i < post.length; i++) {
    let currentElement = post[i];
    container.innerHTML += 
    `<div class="post" id="current-post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${currentElement.author.image}" alt="${currentElement.author.name}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${currentElement.author.name}</div>
                    <div class="post-meta__time">${currentElement.created}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${currentElement.content}</div>
        <div class="post__image">
        <img src="${currentElement.media}" alt="post_image.jpg">
        </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#)" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${currentElement.likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
    </div>`
};

//Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.


const likeIcon = document.querySelectorAll('.js-like-button');
const ikeCounter = document.querySelectorAll('.js-likes-counter');
for (let i = 0; i < likeIcon.length; i++) {
let isClicked = false;
likeIcon[i].addEventListener("click",(event) =>{
    event.currentTarget.classList.toggle("like-button--liked");
    if(!isClicked){
        event.currentTarget.classList.contains("like-button--liked")
        isClicked = true;
        likeIcon[i].innerHTML = `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>`;
        ikeCounter[i].textContent++;
    }
    else{
        isClicked = false;
        likeIcon[i].innerHTML = `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>`;
        ikeCounter[i].textContent--;
    }

})
}
