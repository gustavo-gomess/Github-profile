import axios from "axios";
export interface ApiReturn {
  items: [
    {
      avatar_url: string;
      login: string;
      followers_url: string;
      received_events_url: string;
      received_events_url: string;
      received_events_url: string;
      received_events_url: string;
      received_events_url: {
        repo: {
          name: string;
          url: string;
        };
      };
    }
  ];
}

export interface ArrayReturn {
  avatar: string;
  userName: string;
  followersCount: number;
  repositoriesCount: number;
  repos1: string;
  repos2: string;
  repos3: string;
  repos4: string;
  name_repos: string;
  url_repos: string;
}
