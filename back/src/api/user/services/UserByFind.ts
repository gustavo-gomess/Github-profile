import axios from "axios";

function findGitUser(userName: string, page: string) {
  return axios.get(`https://api.github.com/search/users?q=${userName}`);
}

export { findGitUser };
