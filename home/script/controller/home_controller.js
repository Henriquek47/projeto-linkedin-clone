import API from "../api/api.js";
import { finterIcons } from "../view/components/icons.js";
import Home from "../view/home.js";


class HomeController{
    constructor() {
        this.apiPosts = new API("http://localhost:4001/dev/post");
        this.apiUser = new API("http://localhost:4000/dev/user");
        this.home = new Home();
    }

    initialize() {
        document.addEventListener('DOMContentLoaded', async () => {
            const postsContainer = document.querySelector('#postsContainer');
            const posts = await this.apiPosts.getData();
            posts.forEach(post => {
                const postElement = this.home.createPostElement(post);
                postsContainer.appendChild(postElement);
            });

            const user = await this.apiUser.getData({ 'user-id': 'faff6421-9952-47da-8748-4781c3517d81' });
            const userAsideContainer = document.getElementById('userAsideContainer');
            userAsideContainer.appendChild(this.home.createAsideElement(user));
            const addPostContainer = document.getElementById('addPostContainer');
            addPostContainer.appendChild(this.home.createAddNewPostElement(user));
            const navBarContainer = document.getElementById('navBarContainer');
            navBarContainer.appendChild(this.home.createNavBar(user));
            finterIcons();
        });
    }
}

const controller = new HomeController();
controller.initialize();
