import Post from "../../models/post.js";
import User from "../../models/user.js";
import API from "../api/api.js";
import { finterIcons } from "../view/components/icons.js";
import Home from "../view/home.js";


class HomeController{
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
            const posts = await this.apiPosts.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });
            
            posts.forEach(postBody => {
                const post = new Post(postBody);
                const postElement = this.home.createPostElement(post, this.createLikeHandler.bind(this));
                postsContainer.appendChild(postElement);
            });

            const userBody = await this.apiUser.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });
            const user = new User(userBody);
            const userAsideContainer = document.getElementById('userAsideContainer');
            userAsideContainer.appendChild(this.home.createAsideElement(user));
            const addPostContainer = document.getElementById('addPostContainer');
            addPostContainer.appendChild(this.home.createAddNewPostElement(user));
            const navBarContainer = document.getElementById('navBarContainer');
            navBarContainer.appendChild(this.home.createNavBar(user));
            finterIcons();
        });
    }

    createLikeHandler() {
        return async (post) => {
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
