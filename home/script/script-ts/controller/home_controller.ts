import API from "../api/api";
import { Post } from "../api/model/post";
import { User } from "../api/model/user";
import { LiIcon, filterIcons } from "../view/components/icons";
import Home from "../view/home";

class HomeController{
    apiPosts:API;
    apiPost:API;
    apiUser:API;
    apiLike:API;
    home:Home; 

    constructor() {
        this.apiPosts = new API("http://localhost:4001/dev/post/list");
        this.apiPost = new API("http://localhost:4001/dev/post");
        this.apiUser = new API("http://localhost:4000/dev/user");
        this.apiLike = new API("http://localhost:4002/dev/like");
        this.home = new Home();
    }


    initialize() {
        document.addEventListener('DOMContentLoaded', async () => {
            const postsContainer = document.querySelector('#postsContainer');
            if (postsContainer) {
                const posts = await this.apiPosts.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });
                posts.forEach((postBody: object) => {
                  const post = new Post(postBody);
                  const postElement = this.home.createPostElement(post, this.createLikeHandler.bind(this));
                  if (postElement) {
                    postsContainer.appendChild(postElement);
                }
                });
              }

            const userBody = await this.apiUser.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });
            const user = new User(userBody);
            const userAsideContainer = document.getElementById('userAsideContainer');
            const addPostContainer = document.getElementById('addPostContainer');
            const navBarContainer = document.getElementById('navBarContainer');
            if(userAsideContainer && addPostContainer && navBarContainer){
                const asideElement = this.home.createAsideElement(user);
                const newPostElement = this.home.createAddNewPostElement(user);
                const navBarElement = this.home.createNavBar();
            
                if (asideElement) {
                    userAsideContainer.appendChild(asideElement);
                }
                if (newPostElement) {
                    addPostContainer.appendChild(newPostElement);
                }
                if (navBarElement) {
                    navBarContainer.appendChild(navBarElement);
                }
                
                filterIcons();
            }
        });
    }

    createLikeHandler() {
        return async (post: Post) => {
            console.log("chamou " + post.userLike)
            let body = {post_id: post.id, user_id: 'faff6421-9952-47da-8748-4781c3517d81'}
            let response;
            if(post.userLike === false){
                response = await this.apiLike.postData(body);
            } else if(post.userLike){
                response = await this.apiLike.deleteData(post.id, { 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });
            }
    
            const updatedPostData = await this.apiPost.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' }, post.id);
            const updatedPost = new Post(updatedPostData);
    
            return updatedPost;
        }
    }
    


}

const controller = new HomeController();
controller.initialize();