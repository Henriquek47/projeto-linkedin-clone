export class User {
    id: string;
    profilePicture: string;
    name: string;
    description: string;
    followers: number;
  
    constructor(data: any) {
      this.id = data.id;
      this.profilePicture = data.profile_picture;
      this.name = data.name;
      this.description = data.description;
      this.followers = data.followers.length;
    }
  }
  