import axios from "axios";

function FindByFind(userName: string, page: string) {
  return axios.get(`https://api.github.com/search/users?q=${userName}`);
}

export { FindByFind };
