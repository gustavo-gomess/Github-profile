import React, { FormEvent, useState } from "react";
import axios from "axios";

import { InputContainer, Main, Texts, Img, Div, Repos } from "./styles";

interface UserProps {
  avatar: string;
  name: string;
  userName: string;
  followersCount: number;
  repositoriesCount: number;
  repos1: string;
}

const AXIOS_URL = "http://localhost:8080api";
const api = axios.create({
  baseURL: AXIOS_URL,
});

const Search = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [searchInput, setSearchInput] = useState<string>();

  async function searchUsername(page: number) {
    if (!searchInput) {
      return alert("Digite algo antes de buscar!");
    }

    await api
      .get(
        `http://localhost:8080/api/user/search?searchUserName=${searchInput}`
      )
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        if (res.data.length < 1) {
          alert("Sua busca não trouxe nenhum resultado");
        }
      })
      .catch((err) => {
        alert("Houve um problema na busca, tente novamente");
      });
  }

  async function searchRepo(page: number) {
    await api.get(
      `http://localhost:8080/user/searchUserName=${searchInput}/repos`
    );
  }

  return (
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
            searchUsername(1);
            searchRepo(1);
          }}
        >
          <p>Search</p>
        </button>
      </InputContainer>
      <>
        {users.map((user, i) => {
          return (
            <>
              <Div>
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
                  <a href={`https://github.com/${user}/${user.repos1}`}>
                    {user.name}
                  </a>
                  <a href={user.repos1}> {user.repos1}</a>
                  <a href={user.repos1}> {user.repos1}</a>
                  <a href={user.repos1}> {user.repos1}</a>
                </Repos>
              </Div>
            </>
          );
        })}
      </>
    </Main>
  );
};

export { Search };
