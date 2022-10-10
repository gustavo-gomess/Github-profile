import { CustomError } from "../models/customError";
import { Request, Response, NextFunction } from "express";

function errorHandler(
  err: TypeError | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customError = err;
  if (!(err instanceof CustomError)) {
    customError = new CustomError(
      "Oops, estamos tendo problemas. ",
      500,
      "Aguarde e tente novamente."
    );
  }

  res.status((customError as CustomError).status).json(customError);
}

export { errorHandler };
