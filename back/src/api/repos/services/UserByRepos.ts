import axios from "axios";

function userRepos(userName: string) {
  return axios.get(`https://api.github.com/users/${userName}/repos`);
}

export { userRepos };
