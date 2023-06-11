export default class Post {
    constructor(data) {
      this.id = data.id;
      this.text = data.text;
      this.image = data.image;
      this.user = data.user_id;
      this.likeCount = data.like_count;
      this.createdAt = new Date(data.createdAt);
      this.userLike = data.post_likes.length > 0 ? true : false;
      this.profile = data.user.profile_picture;
      this.userName = data.user.name;
      this.userDescription= data.user.description;
    }
  }
  