import axios from "axios";
export interface ApiReturn {
  items: [
    {
      repos_url: string;
      name: string;
      html_url: string;
    }
  ];
}

export interface ArrayReturn {
  repos1: html_url;
  name: Name;
}
