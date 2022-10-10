import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../models/customError";
import { findGitUser } from "../services/user.findGitUser";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const DELAY_VALUE_MS = 60000;

interface ApiReturn {
  items: [
    {
      avatar_url: string;
      login: string;
      followers_url: string;
      repos_url: string;
    }
  ];
}

interface ArrayReturn {
  avatar: string;
  userName: string;
  followersCount: number;
  repositoriesCount: number;
}

async function searchUsersByName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //Utilizei a query pois em requisições GET, é o mais recomendado
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
      });
    }

    return res.status(200).json(arrayReturn);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export { searchUsersByName };
