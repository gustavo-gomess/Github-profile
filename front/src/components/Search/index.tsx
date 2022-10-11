import React, { FormEvent, useState } from "react";
import axios from "axios";

import { InputContainer, Main, Texts, Img, Div, Repos } from "./styles";

interface UserProps {
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

const AXIOS_URL = "http://localhost:8080api";
const api = axios.create({
  baseURL: AXIOS_URL,
});

const Search = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [searchInput, setSearchInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [reposModalOpen, setReposModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  async function searchUsername(page: number) {
    if (!searchInput) {
      return alert("Digite algo antes de buscar!");
    }
    setLoading(true);

    await api
      .get(
        `http://localhost:8080/api/user/search?searchUserName=${searchInput}&page=${page}`
      )
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        if (res.data.length < 1) {
          alert("Sua busca não trouxe nenhum resultado");
        }
        setLoading(false);
      })
      .catch((err) => {
        alert("Houve um problema na busca, tente novamente");
        setLoading(false);
      });
  }

  return (
    <Div>
      <Main>
        <InputContainer>
          <input
            type="text"
            placeholder="Insira um nome de usuário"
            value={searchInput}
            onChange={(evt) => {
              setSearchInput(evt.target.value);
            }}
          />
          <button
            onClick={() => {
              setPage(1);
              searchUsername(1);
            }}
          >
            <p>Search</p>
          </button>
        </InputContainer>
        <>
          {users.map((user, i) => {
            return (
              <>
                <Img>
                  <img src={user.avatar} alt="" />
                </Img>
                <Texts>
                  <p>Name: {user.userName}</p>
                  <p>Username: {user.userName}</p>
                  <p>Followers: {user.followersCount}</p>
                  <p>Repositories count: {user.repositoriesCount}</p>
                </Texts>
                <Repos>
                  <a href={user.url_repos}> {user.name_repos}</a>
                  <a href={user.url_repos}> {user.name_repos}</a>
                  <a href={user.url_repos}> {user.name_repos}</a>
                  <a href={user.url_repos}> {user.name_repos}</a>
                </Repos>
              </>
            );
          })}
        </>
      </Main>
    </Div>
  );
};

export { Search };
