import axios from "axios";
export interface ApiReturn {
  items: [
    {
      avatar_url: string;
      name: string;
      login: string;
      followers_url: string;
      repos_url: string;
    }
  ];
}

export interface ArrayReturn {
  avatar: string;
  name: string;
  userName: string;
  followersCount: number;
  repositoriesCount: number;
  repos1: string;
}
