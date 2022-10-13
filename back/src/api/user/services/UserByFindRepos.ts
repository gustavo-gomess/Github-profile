import axios from "axios";

function UserByFindRepos(userName: string, page: string) {
  return axios.get(`https://api.github.com/users/users?q=${userName}/repos`);
}

export { UserByFindRepos };
