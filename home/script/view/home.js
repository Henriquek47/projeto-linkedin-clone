export default class Home{

    createPostElement(post) {

        let createdAt = new Date(post.createdAt);
        let formattedDate = createdAt.toLocaleString();

        const template = document.createElement('template');
        template.innerHTML = `<div class="post">
       <div class="author">
           <img class="img-author" src="${post.user.profile_picture}" alt="">
           <div class="column-direction-author">
               <a href="" class="author-name">${post.user.name}</a>
               <span class="description-author">${post.user.description}</span>
               <time class="timestamp-post" datetime="${post.createdAt}">${formattedDate}</time>
           </div>
       </div>
       <div class="text-post">
           <p class="text">${post.text.replace(/\n/g, '<br />')}</p>
       </div>
       ${post.image !== null ? `<div class="post-img"><img class="author-img" src="${post.image}" alt=""></div>` : ''}
       <div class="react-count">
            <span>curtidas ${post.like.length}</span>
            <div class="flex-separate">
                <span>${post.like.length} comentarios</span>
                <span>${post.like.length}compartilharmentos</span>
            </div>
       </div>
       <div class="reactions">
           <div href="" class="react">
               <li-icon type="like"></li-icon>
               <span>Like</span>
           </div>
           <div href="" class="react">
               <li-icon type="comment"></li-icon>
               <span>Comment</span>
           </div>
           <div href="" class="react">
               <li-icon type="share"></li-icon>
               <span>Share</span>
           </div>
           <div href="" class="react">
               <li-icon type="send"></li-icon>
               <span>Send</span>
           </div>
       </div>
    </div>`

        return template.content.firstChild;
    }

    createAsideElement(user) {
        const template = document.createElement('template');
        template.innerHTML =  `<aside class="user">
        <div class="background"></div>
        <div class="user-profile">
            <img src="${user.profile_picture}"
                alt="">
            <span class="user-name">${user.name.toUpperCase()}</span>
            <span class="user-optional-description">${user.description}</span>
        </div>
        <div class="user-network">
            <div class="flex-direction">
                <span>Conexões</span>
                <a href="">${user.followers.length}</a>
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
    
    createAddNewPostElement(user) {
        const template = document.createElement('template');
        template.innerHTML =  `<div class="add-post">
        <div class="flex-direction-input">
            <img src="${user.profile_picture}"
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
    
    createNavBar(user) {
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
}
