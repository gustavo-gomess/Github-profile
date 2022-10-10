import { Request, Response, NextFunction } from "express";
import { CustomError } from "../models/customError";

function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  throw new CustomError("A URL informada é inválida", 404, "");
}

export { notFound };
