export default class User {
    constructor(data) {
      this.id = data.id;
      this.profilePicture = data.profile_picture;
      this.name = data.name;
      this.description = data.description;
      this.followers = data.followers.length;
    }
  }
  