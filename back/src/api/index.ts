import { Router } from "express";
import { reposRouter } from "./repos/repos.routes";

import { userRouter } from "./user/user.routes";

const api = Router();

api.use("/user", userRouter, reposRouter);

export { api };
