import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { api } from "../..";
import { CustomError } from "../../../models/customError";
import { findGitUser } from "../services/UserbyFind";
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
    const { searchUserName, page } = req.query;

    if (!searchUserName) {
      res.status(400);
      throw new CustomError(
        "UserName inválido",
        400,
        "Insira um nome de usuário para pesquisar"
      );
    }

    var apiResult: ApiReturn;
    await findGitUser(searchUserName as string, page as string)
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
            await findGitUser(searchUserName as string, page as string).then(
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
        repos1: item.received_events_url,
        repos2: item.received_events_url,
        repos3: item.received_events_url,
        repos4: item.received_events_url,
        name_repos: item.received_events_url,
        url_repos: item.received_events_url,
      });
    }

    return res.status(200).json(arrayReturn);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export { searchUsersByName };
