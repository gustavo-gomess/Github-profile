import { NextFunction, Request, Response } from "express";
import { userRepos } from "../services/UserByRepos";
import { ApiReturn, ArrayReturn } from "./type";

async function reposSeach(req: Request, res: Response, next: NextFunction) {
  try {
    const { repository } = req.query;

    var apiResult: ApiReturn;

    await userRepos(repository as string).then((res) => {
      apiResult = res.data;
    });

    const arrayReturn: ArrayReturn[] = [];

    for (let item of apiResult!.items) {
      arrayReturn.push({
        repos1: item.repos_url,
        name: item.name,
      });
    }

    return res.status(200).json(arrayReturn);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export { reposSeach };
