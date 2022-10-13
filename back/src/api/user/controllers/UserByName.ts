import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../models/customError";
import { FindByFind } from "../services/UserByFind";
import { ApiReturn, ArrayReturn } from "./type";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const DELAY_VALUE_MS = 60000;

async function searchUsersByName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { searchUserName, page, url_repos, name } = req.query;

    if (!searchUserName) {
      res.status(400);
      throw new CustomError(
        "UserName inválido",
        400,
        "Insira um nome de usuário para pesquisar"
      );
    }

    var apirepo;
    await FindByFind(searchUserName as string, page as string).then((res) => {
      apirepo = res;
    });

    var apiResult: ApiReturn;
    await FindByFind(searchUserName as string, page as string)
      .then((res) => {
        apiResult = res.data;
      })

      .catch(async (err) => {
        if (err.response) {
          if (
            err.response.status === 403 &&
            err.response.data.message.startsWith("API rate limit exceeded")
          ) {
            await delay(DELAY_VALUE_MS);
            await FindByFind(searchUserName as string, page as string).then(
              (res) => {
                apiResult = res.data;
              }
            );
          } else {
            res.status(400);
            throw new CustomError(
              "Erro",
              400,
              "Houve um erro ao realizar a busca."
            );
          }
        }
        res.status(400);
        throw new CustomError(
          "Erro",
          400,
          "Houve um erro ao realizar a busca."
        );
      });

    const arrayReturn: ArrayReturn[] = [];

    for (let item of apiResult!.items) {
      var numberFollowers = 0;
      var numberRepos = 0;

      arrayReturn.push({
        avatar: item.avatar_url,
        userName: item.login,
        followersCount: numberFollowers,
        repositoriesCount: numberRepos,
        repos1: item.repos_url,
        repos2: item.repos_url,
        repos3: item.repos_url,
        repos4: item.repos_url,
        name_repos: item.repos_url,
        url_repos: item.repos_url,
      });
    }

    return res.status(200).json(arrayReturn);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export { searchUsersByName };
