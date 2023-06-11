import { Post } from "../api/model/post";
import { User } from "../api/model/user";


export default class Home {

    createPostElement(post: Post, createLikeHandler: Function) {
        let createdAt = post.createdAt;
        let formattedDate = createdAt.toLocaleString();
    
        const template: HTMLTemplateElement  | null = document.querySelector('#postContainer');
        let postContainer: DocumentFragment | null = null;
        if(template){
            postContainer = document.importNode(template.content, true);
        }
    
        if(postContainer){
            const imgAuthor = postContainer.querySelector<HTMLImageElement>(".img-author");
            const authorName = postContainer.querySelector<HTMLElement>(".author-name");
            const descriptionAuthor = postContainer.querySelector<HTMLElement>(".description-author");
            const postTime = postContainer.querySelector<HTMLElement>(".timestamp-post");
            const postText = postContainer.querySelector<HTMLElement>(".text");
            const postImg = postContainer.querySelector<HTMLElement>(".post-img");
            const authorImg = postContainer.querySelector<HTMLImageElement>(".author-img");
            const iconLike = postContainer.querySelector<HTMLElement>(".like");
            const countLike = postContainer.querySelector<HTMLElement>(".like-count");
            const commentCount = postContainer.querySelector<HTMLElement>(".comment-count");
            const shareCount = postContainer.querySelector<HTMLElement>(".share-count");
            const likeButton = postContainer.querySelector<HTMLElement>('.like-button');
    
            if (!imgAuthor || !authorName || !descriptionAuthor || !postTime || !postText || !postImg || !authorImg || !iconLike || !countLike || !commentCount || !shareCount || !likeButton) {
                throw new Error('Could not find required element(s) in postContainer');
            }
    
            imgAuthor.src = post.profile;
            authorName.textContent = post.userName;
            descriptionAuthor.textContent = post.userDescription;
            postTime.textContent = formattedDate;
    
            postText.textContent = post.text;
    
            if (post.image != null) {
                postImg.style.display = 'block';
                authorImg.src = post.image;
            } else {
                postImg.style.display = 'none';
            }
    
            countLike.textContent = 'curtidas ' + post.likeCount;
            commentCount.textContent = 0 + ' comentarios';
            shareCount.textContent = 0 + ' compartilhamentos';
    
            let liked = post.userLike;
    
            if (liked) {
                iconLike.classList.add('liked');
            } else {
                iconLike.classList.remove('liked');
            }
    
            // Attach a click event listener to the like button
            likeButton.addEventListener('click', async () => {
                post = await createLikeHandler()(post);
                console.log(post);
    
                liked = post.userLike;
                if (liked) {
                    likeButton.classList.remove('no-liked');
                    likeButton.classList.add('liked');
                } else {
                    likeButton.classList.remove('liked');
                    likeButton.classList.add('no-liked');
                }
    
                countLike.textContent = 'curtidas ' + post.likeCount
            });
    
            return postContainer;
        }
        return;
    }
    

    createAsideElement(user: User) {
        const template = document.createElement('template');
        template.innerHTML = `<aside class="user">
        <div class="background"></div>
        <div class="user-profile">
            <img src="${user.profilePicture}"
                alt="">
            <span class="user-name">${user.name.toUpperCase()}</span>
            <span class="user-optional-description">${user.description}</span>
        </div>
        <div class="user-network">
            <div class="flex-direction">
                <span>Conexões</span>
                <a href="">${user.followers}</a>
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

    createAddNewPostElement(user: User) {
        const template = document.createElement('template');
        template.innerHTML = `<div class="add-post">
        <div class="flex-direction-input">
            <img src="${user.profilePicture}"
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

    createNavBar() {
        const template = document.createElement('template');
        template.innerHTML = `<nav>
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
