import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../../models/customError";
import { FindByFind } from "../services/UserByFind";
import { ApiReturn, ArrayReturn } from "./type";

async function searchUsersByName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { searchUserName } = req.query;

    if (!searchUserName) {
      res.status(400);
      throw new CustomError(
        "UserName inválido",
        400,
        "Insira um nome de usuário para pesquisar"
      );
    }

    var apiResult: ApiReturn;

    await FindByFind(searchUserName as string).then((res) => {
      apiResult = res.data;
    });

    const arrayReturn: ArrayReturn[] = [];

    for (let item of apiResult!.items) {
      var numberFollowers = 0;
      var numberRepos = 0;

      arrayReturn.push({
        avatar: item.avatar_url,
        name: item.name,
        userName: item.login,
        followersCount: numberFollowers,
        repositoriesCount: numberRepos,
        repos1: item.repos_url,
      });
    }

    return res.status(200).json(arrayReturn);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export { searchUsersByName };
