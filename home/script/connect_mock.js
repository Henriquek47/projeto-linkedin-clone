import { finterIcons } from './icons.js';

const POST_URL = "http://localhost:3000/posts";
const USER_URL = "http://localhost:3000/users";

async function getAllPosts(){
    try {
        const response = await fetch(POST_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        for (let post of posts) {
            const postContainer = document.getElementById('postContainer');
            postContainer.appendChild(createPostElement(post));
        }
    } catch (err) {
        console.error('Failed to fetch posts: ', err);
    }
}

function createPostElement(post) {
    const template = document.createElement('template');
    template.innerHTML =  `<div class="post">
   <div class="author">
       <img class="img-author" src="${post.user.profile_picture}" alt="">
       <div class="column-direction-author">
           <a href="" class="author-name">${post.user.name}</a>
           <span class="description-author">${post.user.description}</span>
           <time class="timestamp-post" datetime="2023-05-19T10:00:00">${post.created_at}</time>
       </div>
   </div>
   <div class="text-post">
       <p class="text">${post.text}</p>
   </div>
   ${post.image !== null ? `<div class="post-img"><img class="author-img" src="${post.image}" alt=""></div>` : ''}
   <div class="reactions">
       <a href="" class="react">
           <li-icon type="like"></li-icon>
           <span>Like</span>
       </a>
       <a href="" class="react">
           <li-icon type="comment"></li-icon>
           <span>Comment</span>
       </a>
       <a href="" class="react">
           <li-icon type="share"></li-icon>
           <span>Share</span>
       </a>
       <a href="" class="react">
           <li-icon type="send"></li-icon>
           <span>Send</span>
       </a>
   </div>
</div>`

return template.content.firstChild;
}

async function getInforUser(){
    try {
        const response = await fetch(USER_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        for (let user of users) {
            const userAsideContainer = document.getElementById('userAsideContainer');
            userAsideContainer.appendChild(createAsideElement(user));
            const addPostContainer = document.getElementById('addPostContainer');
            addPostContainer.appendChild(createAddNewPostElement(user));
            const navBarContainer = document.getElementById('navBarContainer');
            navBarContainer.appendChild(createNavBar(user));
        }
    } catch (err) {
        console.error('Failed to fetch posts: ', err);
    }
}

function createAsideElement(user) {
    const template = document.createElement('template');
    template.innerHTML =  `<aside class="user">
    <div class="background"></div>
    <div class="user-profile">
        <img src="${user.image}"
            alt="">
        <span class="user-name">${user.name.toUpperCase()}</span>
        <span class="user-optional-description">${user.educational_background}</span>
    </div>
    <div class="user-network">
        <div class="flex-direction">
            <span>Conexões</span>
            <a href="">${user.connections}</a>
        </div>
        <a href="">Amplie sua rede</a>
    </div>
    <div class="tools">
        <span>Acesse ferramentas e estatísticas exclusivas</span>
        <a href="">Seja contratado mais rápido. Tente Premium livre.</a>
    </div>
    <div class="saves">
        <img src="https://static.thenounproject.com/png/809340-200.png" alt="">
        <span>Meus itens</span>
    </div>
</aside>`

return template.content.firstChild;
}

function createAddNewPostElement(user) {
    const template = document.createElement('template');
    template.innerHTML =  `<div class="add-post">
    <div class="flex-direction-input">
        <img src="${user.image}"
            alt="">
        <input type="text" placeholder="Começar publicação">
    </div>
    <ul>
        <li><a href="">
                <li-icon type="photo"></li-icon>
                <span class="category-text">Foto</span>
            </a></li>
        <li><a href="">
                <li-icon type="video"></li-icon>
                <span class="category-text">Video</span>
            </a></li>
        <li><a href="">
                <li-icon type="event"></li-icon>
                <span class="category-text">Evento</span>
            </a></li>
        <li><a href="">
                <li-icon type="write-article"></li-icon>
                <span class="category-text">Escrever artigo</span>
            </a></li>
    </ul>
</div>`

return template.content.firstChild;
}

function createNavBar(user) {
    const template = document.createElement('template');
    template.innerHTML =  `<nav>
    <div class="left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="">
        <div class="search-bar">
            <input type="text" placeholder="Pesquisar">
            <li-icon type="search"></li-icon>
        </div>
    </div>
    <div class="center">
        <a href="" class="home active">
            <li-icon type="home"></li-icon>
            <span title="Inicio">Inicio</span>
        </a>
        <a href="" class="network">
            <li-icon type="network"></li-icon>
            <span title="Minha rede">Minha rede</span>
        </a>
        <a href="" class="jobs">
            <li-icon type="jobs"></li-icon>
            <span title="Vagas">Vagas</span>
        </a>
        <a href="" class="messages">
            <li-icon type="messages"></li-icon>
            <span title="Messagens">Messagens</span>
        </a>
        <a href="" class="notification">
            <li-icon type="notification"></li-icon>
            <span title="Notificações">Notificações</span>
        </a>
        <a href="" class="profile">
            <li-icon type="profile"></li-icon>
            <div>
                <span title="Eu">Eu</span>
                <li-icon type="arrow"></li-icon>
            </div>
        </a>
    </div>
    <div class="right"></div>
</nav>`

return template.content.firstChild;
}

document.addEventListener('DOMContentLoaded', function () {
    getAllPosts();
    getInforUser().then((result) => {
        finterIcons();
    });
  });
