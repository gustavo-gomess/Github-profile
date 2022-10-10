import { Router } from "express";

import { userRouter } from "./user/user.routes";

const api = Router();

api.use("/user", userRouter);

export { api };
